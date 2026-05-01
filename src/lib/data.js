export const categoryfunc = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const output = await res.json();
  return output;
};

export   const categorywise = async (id) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${id}`,
    );
    const output = await res.json();

    return output.data;
  };


export const viewnewsdetail = async (id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)

  const  output = await res.json()

  return output.data[0]
}