import { connect } from './connect.js';

export const insertelement = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    

    try {
        await connect.query(
            `INSERT INTO login values( ? , ?)`, 
            [username,password]
        );
        
        // Redirect only after successful insertion
        
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};
export const payment = async (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const cardname = req.body.cardname;
    const cardnumber = req.body.cardnumber;
    const expmonth = req.body.expmonth;
    const expyear = req.body.expyear;

    try {
        await connect.query(
            `INSERT INTO payment values(?, ?, ? , ? , ? , ? , ? , ? , ?)`, 
            [fullname,email, address,city ,state,cardname, cardnumber , expmonth ,expyear]
        );
        
        // Redirect only after successful insertion
        
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};