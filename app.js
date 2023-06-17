
  const [tabeldata, settabeldata]= useState([]);
    
  useEffect(()=>{
    loadData()
      
  },[])
   
  let loadData=async ()=>{
    try {
     let tabdata = await axios.get( `http://localhost:5000/files?volume=${volume}&issue=${issue}`);
 
    console.log(tabdata.data)
    settabeldata(tabdata.data);
    } catch (error) {
     console.log(error)
    }
 }

////////////////////////////////////////////////////////////

app.get("/files", async (req, res) => {
  try {
    const data = await ARTICLES.find({
      volume: +req.query.volume,
      issue: +req.query.issue,
    });

    if (data.length > 0) {
      res.json({ data });
    } else {
      res.json({ message: "no data found" });
    }
  } catch (error) {
    console.log(error);
  }
});
