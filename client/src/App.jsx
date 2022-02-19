import { useEffect, useState } from "react";
import storage from "./firebase";
function App() {
  const [image, setImage] = useState("");
  const [form, setForm] = useState({
    title: "",
    imageName: "",
  });
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    async function getDocs() {
      const res = await fetch("/getdocs");
      const data = await res.json();
      if (res.status == 200) {
        setDocs(data);
      }
    }
    getDocs();
  }, [docs.length]);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
    console.log(form);
  }
  async function onSubmit(e) {
    setForm((form.imageName = image.name));
    console.log(form);
    e.preventDefault();
    storage
      .ref(`/documnents/${image.name}`)
      .put(image)
      .on("state_changed", alert("success"), alert, () => {
        // Getting Download Link
      });

    // When a post request is sent to the create url, we'll add a new record to the database.

    const res = await fetch("/upload/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 400) {
      console.log("errror");
    } else {
      console.log(data);
    }
  }

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        <form method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            value={form.title}
            name="title"
            onChange={handleChange}
          />{" "}
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <input type="submit" value="data sending" />
        </form>

        <br />
        <p></p>
      </center>

      <div>
        <h1>Notices</h1>
        {docs.map((doc) => {
          var url = `https://firebasestorage.googleapis.com/v0/b/uploadfilemudasir.appspot.com/o/documnents%2F${doc.imageName}?alt=media&token=47ab08cb-4afa-4680-9532-0cc012288b6f`;
          return docs ? (
            <>
              <center>
                <a href={url} download>
                  {" "}
                  <h3>{doc.title}</h3>
                </a>
              </center>
            </>
          ) : (
            <center>
              <h1>Loading...</h1>
            </center>
          );
        })}
      </div>
    </div>
  );
}

export default App;
