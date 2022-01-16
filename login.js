const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
const path = "amos-hexschool"; // 請加入個人 API Path
const usernameInput = document.querySelector("#email");
const pwInput = document.querySelector("#password");
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", login);

function login() {
  const username = usernameInput.value;
  const password = pwInput.value;

  const user = {
    username,
    password
  };
  console.log(username, password);

  // #2 發送 API 至遠端並登入（並儲存 Token）
  axios
    .post(`${url}/admin/signin`, user)
    .then((res) => {
      console.log(res);
      const { token, expired } = res.data;
      console.log(token, expired);
      //https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}; `;
      window.open("products.html");
    })
    .catch((err) => {
        //console.dir(err);
        console.log(err.data.message);
    });
}
