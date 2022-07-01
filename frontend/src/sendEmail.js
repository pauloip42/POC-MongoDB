export async function sendEmail(email){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: email
    };
    await fetch('http://localhost:4000/', requestOptions)
        .then((response) => {
            console.log(response.json);
            return response.json();
    });
}