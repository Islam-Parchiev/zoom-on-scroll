
function App() {
  return (
    <>
      <div className="relative">
      <div className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"></div>
          <div className="img-container flex items-center justify-center h-screen">
            <img src="/public/bg.jpg" alt="Test" className="image" />
            <div className="absolute flex flex-col items-center justify-center">
              <h1 className="text-[170px] text-white">
                <span className="text-stroke">
                  Outlook
                </span>
                &nbsp;Above
              </h1>
              <p>A Showcase of the world&apos;s best aerial photography</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
