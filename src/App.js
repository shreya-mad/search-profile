import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const item = [
    {  id: 1,
       name: 'Shreya Madeshiya',
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 2,
       name: 'rashmika Maurya',
      pic:'https://randomuser.me/api/portraits/women/0.jpg' },
    {  id: 3,
       name: 'Pinki Gupta',
      pic:'https://randomuser.me/api/portraits/women/0.jpg' },
    {  id: 4,
       name: 'Renu Garg',
      pic:'https://randomuser.me/api/portraits/women/0.jpg' },
    {  id: 5,
       name: 'ankita Yadav',
      pic:'https://randomuser.me/api/portraits/women/0.jpg' },
    {  id: 6,
       name: 'Kiran Verma',
       pic:'https://randomuser.me/api/portraits/women/0.jpg',},
    {  id: 7,
       name: 'James ' ,
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 8,
       name: 'Raghav Sharma' ,
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 9,
       name: 'Manju Gupta' ,
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 10,
        name: 'jan ' ,
        pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 11,
       name: 'Jerry' ,
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
    {  id: 12,
       name: 'rini rana' ,
       pic:'https://randomuser.me/api/portraits/women/0.jpg'},
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue('');
  };

  const handleChipRemove = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const filteredItems = item.filter((item) => !selectedItems.some((selectedItem) => selectedItem.id === item.id));

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="chips-container">
        {selectedItems.map((item) => (
          <div key={item.id} className="chip" onClick={() => handleChipRemove(item)}>
            <img style={{borderRadius:'50%'}} src={item.pic} alt='noPic' />
            {item.name}
             <span className="cross">X</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Type to search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <div className="items-list">
          {filteredItems
            .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item) => (
              <div key={item.id} className="item" onClick={() => handleItemClick(item)}>
                 <img style={{borderRadius:'50%',height:'20px'}} src={item.pic} alt='noPic' />
                {item.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
