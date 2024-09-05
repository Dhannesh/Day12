console.log("Hello Buddy");
let i = 1;

const time = () => {
  console.log("working... timeup!", i++);
  setTimeout(() => {
    console.log("timeout 2");
  }, 1000);
  console.log("ending time");
};

const handleClick = () => {
  console.log("start");
  setTimeout(time, 10000);
  console.log("end");
};

// setTimeout(time, 10000);
// console.log("time out");

const start = () => {
  setInterval(() => {
    console.log("logging...", i++);
  }, 1000);
};

const fetchData = async () => {
  const p = document.getElementById("avatars");
  const url = "https://api.github.com/users";
  const resp = await fetch(url);
  const data = await resp.json();
  data.forEach((element) => {
    const imgData = document.createElement("img");
    imgData.setAttribute("src", element.avatar_url);
    imgData.setAttribute("style", "height:200px;width:200px");
    p.appendChild(imgData);
  });
  //
  //   console.log(data);
  console.log("fetch data");
};

const createUser = (login, avatar) => {
  const imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "imgData");

  const imgName = document.createElement("h3");
  const userName = document.createTextNode(login);
  imgName.appendChild(userName);
  //   console.log(imgName);

  const imgData = document.createElement("img");
  imgData.setAttribute("src", avatar);
  imgData.setAttribute("title", login);
  imgDiv.append(imgData, imgName);
  return imgDiv;
};

const fetchData2 = () => {
  const p = document.getElementById("avatars");
  const userCount = document.getElementById("userCount").value;
  console.log("total user:", userCount);

  const url = "https://api.github.com/users?per_page=" + userCount;
  const resp = fetch(url);
  resp
    .then((data) => {
      const users = data.json();
      users
        .then((data) => {
          data.forEach((user) => {
            const child = createUser(user.login, user.avatar_url);
            p.appendChild(child);
          });
        })
        .catch((err) => {
          console.log("error aa gaya", err);
        });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
