// With Try Catch Block

const getUsers = async () => {
  try {
    const reponse = await fetch("http://httpstat.us/404");

    if (!response.ok) throw new Error("Request Failed");

    const data = await reponse.text();
    console.log(data);
  } catch (error) {
    console.log("Error : ", error);
  }
};

// Without Try Catch Block Outside the function

const getPosts = async () => {
  const reponse = await fetch("http://httpstat.us/404");

  if (!response.ok) throw new Error("Request Failed");

  const data = await reponse.text();
  console.log(data);
};

getPosts().catch((err) => console.log(err));
