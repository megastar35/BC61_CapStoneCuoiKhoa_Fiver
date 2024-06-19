import React, { useState } from 'react';
import { AutoComplete } from 'antd';
const Languages = ({
  isAddLanguages,
  setIsLanguages,
  addLanguages,
  setAddLanguages,
}) => {
  const options = [
    {
      label: 'Vietnamese-Tiếng Việt',
      value: 'Vietnamese',
    },
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Japanese - 日本語 (にほんご／にっぽんご)',
      value: 'Japanese',
    },
    {
      label:'Korean - 한국어',
      value:'Korean'
    },
    {
      label:'Chinese - 中文 (简体)',
      value:'Chinese'
    },
    {
      label:'Spanish - Español',
      value:'Spanish'
    },
    {
      label:'French - Français',
      value:'French'
    },
    {
      label:'Thai - ไทย',
      value:'Thai'
    },
    {
      label:'Portuguese - Português',
      value:'Portuguese'
    },
    {
      label:'German - Deutsch',
      value:'German'
    },
    {
      label:'Russian - Русский Язык',
      value:'Russian'
    },
    {
      label:'Arabic - العربية',
      value:'Arabic'
    },
  ];
  const [language,setLanguage]=useState('');
  const [level,setLevel]=useState('');
  const renderLanguages=()=>{
     console.log(addLanguages);
    return addLanguages.map((item,index)=>{
      return <li className=' mt-1 border-2 rounded-[15px] p-2 w-[150px]' key={index}>{item.language}</li>
})
  }
  return (
    <div className="languages">
      {!isAddLanguages ? (
        <div className="">
          <div className="flex justify-between pb-10">
            <h3>Languages</h3>
            <a
              onClick={() => {
                setIsLanguages(true);
              }}
            >
              Add
            </a>
          </div>
          <ul>
            {renderLanguages()}
          </ul>
        </div>
      ) : (
        <div>
          <h5 className="mb-3">Languages</h5>
          <div className="bg-[#F4F4F4] p-3 rounded flex flex-col justify-center text-[#7A7D85]">
            {/* <input
              className="text-[14px] border-[#e5e5e5]"
              type="text"
              placeholder="add Language"
              value={addLanguages}
              onChange={e => setAddLanguages(e.target.value)}
            /> */}
            <AutoComplete filterOption={true} onSelect={value=>{setLanguage(value)}} placeholder="add Language" options={options}/>
            <select onChange={(e)=>{setLevel(e.target.value)}} className='mt-3 text-[14px] p-3 border-[#e5e5e5]'>
              <option value={0} className="hidden">
                Language Level
              </option>
              <option value="basic">Basic</option>
              <option value="conversational">Conversational</option>
              <option value="fluent">Fluent</option>
              <option value="native_or_bilingual">Native/Bilingual</option>
            </select>
            <div className="mt-3">
              <button
                className="cancel rounded mr-[10px] px-[50px] py-[10px] border-[1px]"
                onClick={() => {
                  setIsLanguages(false);
                }}
              >
                Cancel
              </button>
              <button
                className="update rounded bg-[#3FCA89] mr-[10px] px-[50px] py-[10px]"
                onClick={() => {
                  const languageUser={'language':language,'level':level};
                  setAddLanguages([...addLanguages,languageUser]);
                  setIsLanguages(false);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Languages;
