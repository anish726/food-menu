import React,{useState} from 'react';
import './App.css';
import Items from './data'
import Categories from './components/Categories'
import Menu from './components/Menu';

const allCategories = ['all',...new Set(Items.map((item)=> 
item.category))]


function App() {

  const [items, setItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category)=>{
    if(category === 'all'){
      setItems(Items);
      return;
    }
    const newItems = Items.filter((item) =>item.category
    === category);
    setItems(newItems)

  }


  return (
    <main>
    <section className="menu section">
    <div className="title">
    <h2> Our Menu</h2>
    <div className="underline">
    </div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={items}/>
    </section>
    </main>
 
  );
}

export default App;
