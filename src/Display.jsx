const Display = ({ data }) => {
  console.log(data);
  if (data !== []) {
    return (
      <div className="flex items-center flex-col justify-center sm:max-w-xl xs:max-w-md md:max-w-xl lg:max-w-3xl max-w-2xl mx-auto md:ml-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="px-5 my-5 border border-slate-200 max-screen-m flex-col justify-center flex"
            >
              <p>{item.word}</p>
              <p>{item.definition}</p>
              <p>{item.example}</p>
              <p>
                By {item.author} on {item.written_on}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Display;
