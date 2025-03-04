const body = document.body;
const button = document.getElementById('button');
const user = document.getElementById('user');


button.addEventListener('click', () => {
})

async function fetchApi() {
    try {
        user.innerHTML = `<p class="waitp">Please wait...</p>`;
        user.style.backgroundColor = 'white';
        user.style.backgroundImage = 'none';

        const url = await fetch('https://randomuser.me/api/');
        const res = await url.json();
        const data = res.results[0];

        const picture = data.picture;
        const img = picture.medium;
        const name = data.name;
        const first = name.first;
        const last = name.last;
        const phone = data.phone;
        const location = data.location;
        const street = location.street;
        const streetName = street.name;
        const city = location.city;
        const dob = data.dob;
        const age = dob.age;
        const email = data.email;

        
        user.innerHTML = `
            <img src="${img}" alt="" id="userimg">
            <div id="texts">
                <div id="maininfo">
                    <h1 id="name">${first} ${last}</h1>
                    <h2 id="job">Frontend Developer</h2>
                </div>
                <div id="otherinfo">
                    <p id="phone">Phone: ${phone}</p>
                    <p id="address">Address: ${streetName}, ${city}</p>
                    <p id="age">Age: ${age}</p>
                    <p id="email">Email: ${email}</p>
                </div>
                <button id="button">Change user</button>
            </div>
        `;

        
        const newButton = document.getElementById('button');
        newButton.addEventListener('click', fetchApi);
    } catch (error) {
        user.innerHTML = `<p class="errorp">Something went wrong. <br> Please try again</p> <button id="button">Change user</button>`;
        console.log('Произошла ошибка при получении данных. Ошибка:', error);
        const newButton = document.getElementById('button');
        newButton.addEventListener('click', fetchApi);
    }
}

button.addEventListener('click', fetchApi);