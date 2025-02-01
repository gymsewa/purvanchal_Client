export async function ContactForm(fName, lName, email, mobile, message) {
    const url = "https://api.rkcsc.in/api/v1/user/contact_us";
    const body = {
      First_name: fName,
      Last_name: lName,
      email: email,
      mobile: mobile,
      message: message || ""
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error sending contact form:", error);
      throw error;
    }
  }