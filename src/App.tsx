import { useEffect, useState } from 'react';
import ImagesList from './components/ImagesList';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <main>
        <ImagesList search={search} />
      </main>
    </>
  );
}

export default App;
