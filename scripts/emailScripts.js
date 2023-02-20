const userRegistration = (user) => {
    return{
    subject : "Welcome to Book My Show",
    html : `
    <div style="background-color: #f2f2f2; padding: 20px; text-align: center;">
        <h3>Hello ${user.name},</h3>
        <p>We are delighted to welcome you to Book My Show!</p>
        <p>Your account has been successfully registered with the email address <b>${user.email}</b>.</p>
        <p>Your user ID, which will be required for login, is <b>${user.userId}</b>.</p>
        <hr style="border-top: 1px solid #ccc; margin: 20px 0;">
        <p>Thank you for choosing Book My Show, and we look forward to providing you with the best entertainment experience.</p>
        <p>Best regards,</p>
        <h3 style="margin: 0;">Book My Show</h3>
        <img src="https://logodix.com/logo/2011124.jpg" style="width: 150px; height: auto; margin-top: 20px;" />
    </div>
    `
    }
}

const userLoggedIn = (user) =>{
    return{
        subject : "Successful Sign In",
        html : `
        <div style="background-color: #f2f2f2; padding: 20px; text-align: center;">
        <h5> Hello ${user.name}, </h5>
        <br/>
        You have successfully signed in with the following email address: <b> ${user.email} </b>   
        <br/>
        If you believe this sign in was not done by you, please change your password as soon as possible.
        <br/>
        <hr/>
       Best regards,
       <h3 style="margin: 0;">Book My Show</h3>
        <img src="https://logodix.com/logo/2011124.jpg" style="width: 150px; height: auto; margin-top: 20px;" />
        </div>
        `
        }
}


const paymentSuccess = (user, booking, payment) => {
  return {
      subject : "Book My Show - Payment successful!",
      html : `
      <div>
      <h5>Hi ${user.name},</h5>
      <br/>
      Your payment of <b>₹ ${payment.amount}</b> have been confirmed!
      <br/>
      Your Booking ID required at the time of entering to the theatre will be <b>${booking._id}</b>
      <br/>
      Enjoy your show!
      <br/>
      <hr/>
      Thanks & Regards,
      <br/>
      <h3>Book My Show</h3>
      <img src="https://logodix.com/logo/2011124.jpg"/>
      </div>
      `
  };
}

// const newMovieAdded = (user,movie,theatre)=>{

// }

// const theatreDeleted = (user,theatre)=>{

// }

module.exports = {
    userRegistration,
    userLoggedIn,
     paymentSuccess,
    // newMovieAdded,
    // theatreDeleted
}