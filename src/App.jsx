const App = () => {
  console.log(import.meta.env.VITE_APP_APPWRITE_URL);

  return (
    <div>
      <h1 className="text-6xl text-green-300">
        Appwirte Megablog with Vite.
      </h1>
    </div>
  )
}

export default App