function HomePage({ data }: { data: { name: string,id:number } }) {
    return (
      <h1 className="text-white">
        {data.id} - {data.name}
      </h1>
    );
  }
  
  export default HomePage;
  