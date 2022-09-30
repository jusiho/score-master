export async function getStaticProps() {
    try {
      const res= await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      return {
        props:{
          data: data
        }
      }
    } catch (error) {
      console.log("error")
    }
  }