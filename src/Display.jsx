const Display = ({ data }) => {
  console.log(data);
  if (data !== []) {
    return (
      <div className="bg-[#10151B] flex items-center flex-col justify-center xs:max-w-xs sm:full  md:max-w-xl lg:max-w-2xl mx-auto md:mr-2 md:ml-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="px-5 my-5 min-w-full border font-serif border-[#1B2936] bg-[#1B2936] rounded max-screen-m flex-col justify-center flex text-left text-white text-lg"
            >
              <p className="flex font-semibold items-right text-[#1FA2F3] text-5xl pd-1">
                {item.word}
              </p>
              <p className="py-2">{item.definition}</p>
              <p className="italic py-2">{item.example}</p>
              <p className="py-2">
                By {item.author} on {item.written_on}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="h-full bg-[#10151B]"></div>;
  }
};

export default Display;
