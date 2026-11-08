import express from "express";
import cors from "cors";
import pg from "pg";
const port = 3000;
const app =express();
const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Sriraminfra",
    password:"123456",
    port:42422
});
db.connect();
app.use(cors());
app.use(express.json());
app.post("/register",async(req,res)=>{
    const{name,password,email,typeofperson}=req.body;
    try{
        await db.query(
            'insert into users(name,password,email,typeofperson) values($1,$2,$3,$4)',[name,password,email,typeofperson]
        )
        res.json({
            message:"Registration Sucessfull"
        });
    }
    catch(err){
        console.log(err);

        res.status(500).json({
            message: "Registration failed"
        });
    }
});
app.post("/login",async(req,res)=>{
    const{password,email}=req.body;
    try{
      const result =await db.query('select * from users where email=$1 AND password=$2 AND typeofperson=$3',[email,password,"customer"]);
      if(result.rows.length>0){
         res.json({
            success:true,
            message:"loginsuccessfull"
         });
       }
      else{ 
        res.json({
                success: false,
                message: "Invalid email or password"
      });
       }
    }
    catch(err){
            console.log(err);

            res.status(500).json({
                success: false,
                message: "Verification failed"
            });
        }
});
app.post("/logins",async(req,res)=>{
    const{password,email}=req.body;
    try{
        const result = await db.query('select * from users where email=$1 AND password=$2 AND typeofperson=$3 AND sno=$4',[email,password,"admin","6"]);
        if(result.rows.length>0){
            res.json({
                success:true,
                message:"login successfull"
            });
        }
        else{
            res.json({
                success:false,
                message:"Invalid credentials Only Admin is Allowed"
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"verification Failed"
        });
    }
});
//users ane http deniki ante mana admin ki enthamandhi registered users ani diplay cheyadaniki ee route
app.get("/users",async(req,res)=>{
    try{
        const result = await db.query("select sno,name,typeofperson,email FROM users ORDER BY sno DESC");
        res.json(result.rows);
    }
    catch(err){
    console.log(err);
    res.status(500).json({
        message:"Feching is not here something fishyyy"
    });
    }
})
app.get("/admindashcustomers",async(req,res)=>{
    try{
        const result = await db.query("select count(*) from users where typeofperson=$1",["customer"]);
        res.json({
            noofcustomers:Number(result.rows[0].count),
        })
    }
    catch(err){
        res.status(500).json({
            error:"Fetching gone wrong"
        })
    }
})
app.get("/admindashenquiries",async(req,res)=>{
    try{
        const result = await db.query("select count(*) from enquiries where status=$1",["pending"]);
        res.json({
            noofenquiries:Number(result.rows[0].count),
        })
    }
    catch(err){
        res.status(500).json({
            message:"Fetching went wrong"
        })
    }
})
app.post("/enquiryform",async(req,res)=>{
   try{
    const {fullname,phonenumber,email,locations,selection,message} = req.body;
    await db.query('insert into enquiries(fullname,phonenumber,email,location,selection,message,status) values($1,$2,$3,$4,$5,$6,$7)',[fullname,phonenumber,email,locations,selection,message,"pending"])
    res.json({
        message:"Your data is Updated in Our logs"
    })
   }
   catch(err){
    console.log(err);
    res.status(500).json({
        message:"Something went Wrong"
    })
   }
})
app.post("/service",async(req,res)=>{
    try{
       const{fullname,location,address,phonenumber,solarcategory,solartype,requirement}=req.body;
       const result = await db.query("insert into service(fullname,location,address,phonenumber,solarcategory,solartype,requirement) values($1,$2,$3,$4,$5,$6,$7)",[fullname,location,address,phonenumber,solarcategory,solartype,requirement]);
       res.json({
        message:"your data is entered in our logs"
       })
    }
    catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})
app.get("/enquirycount",async(req,res)=>{
     try{
        const result = await db.query("select count (*) as total from enquiries")
        res.json({
            total_enquiries:Number(result.rows[0].total)
        })
     }
     catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
     }
})
app.get("/enquiryretriving",async(req,res)=>{
    try{
        const result = await db.query("select id,fullname,phonenumber,email,location,selection,message,status from enquiries")
        res.json({
            data:result.rows
        })
    }
    catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})
app.get("/registeredcustomersretriving",async(req,res)=>{
     try{
        const result = await db.query("select sno,name,typeofperson,email from users where typeofperson=$1",["customer"])
        res.json({
            data:result.rows
        })
     }
     catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})
app.patch("/update-consultation/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            `UPDATE enquiries
             SET status = $1
             WHERE id = $2
             RETURNING id, status`,
            ["Consultation Completed", id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        res.json({
            message: "Consultation updated successfully",
            data: {
                status: result.rows[0].status
            }
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Failed to update consultation"
        });
    }
});
app.get("/servicerequestfromcustomer",async(req,res)=>{
    try{
        const response = await db.query("select id,fullname,location,address,phonenumber,solarcategory,status from service");
        res.json({
            data:response.rows,
            message:"Data is transformed to frontend"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:"Something went wrong"
        })
    }
})

app.patch("/consulationofservice/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      `UPDATE service
       SET status = $1
       WHERE id = $2
       RETURNING id, status`,
      ["Consultation Completed", id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Service request not found"
      });
    }

    res.json({
      message: "Consultation updated successfully",
      data: {
        status: result.rows[0].status
      }
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Failed to update consultation"
    });
  }
});
app.get("/projectprogresscustomers", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT id, fullname, location
       FROM service
       ORDER BY fullname`
    );

    res.json({
      data: result.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to fetch customers"
    });
  }
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})