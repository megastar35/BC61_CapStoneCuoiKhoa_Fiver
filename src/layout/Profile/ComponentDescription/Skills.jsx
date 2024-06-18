import React, { useEffect, useState } from 'react';
import { AutoComplete } from 'antd';
import { controlUserServer } from '../../../services/ControlUser';
const Skills = ({ isOpenSkill, setIsOpenSkill, newSkill, setNewSkill }) => {
  const [arrSkill, setArrSkill] = useState([]);
  const [optionSkill,setOptionSkill]=useState([]);
  const [skill,setSkill]=useState('');
  const [level,setLevel]=useState('');
  useEffect(()=>{
    controlUserServer.GetSkillsUser()
    .then((res) => {
      const skills = res.data.content;
      setArrSkill(skills);

      const options = skills.map((item) => ({
        label: item.tenSkill,
        value: item.tenSkill,
      }));
      setOptionSkill(options);
    })
    .catch((err) => {
      console.error(err);
    });
  },[]);
  // useEffect(()=>{
  //   console.log(optionSkill);
  // },[optionSkill])
  const renderListSkill=()=>{
    return newSkill.map((item,index)=>{
          return <li className=' mt-1 border-2 rounded-[15px] p-2 w-[100px]' key={index}>{item.skill}</li>
    })
    console.log("skill: ",skill);
    console.log("level: ",level);
    console.log("newSkill: ",newSkill);
  }
  return (
    <div className="skill">
      {!isOpenSkill ? (
        <div>
          <div className="flex justify-between pb-10">
            <h5>Skill</h5>
            <a
              onClick={() => {
                setIsOpenSkill(true);
              }}
            >
              Add new
            </a>
          </div>
          <ul>
            {renderListSkill()}
          </ul>
        </div>
      ) : (
        <div>
          <h5 className="mb-3">Skill</h5>
          <div className="bg-[#F4F4F4] p-3 rounded flex flex-col justify-center text-[#7A7D85]">
            {/* <input
                      className="text-[14px] border-[#e5e5e5]"
                      type="text"
                      placeholder="add Skill (e.g. Voice Talent)"
                      value={newSkill}
                      onChange={e => setNewSkill(e.target.value)}
                    /> */}
            <AutoComplete
              placeholder="add Skill (e.g. Voice Talent)"
              options={optionSkill}
              filterOption={true}
              onSelect={(value)=>setSkill(value)}
            />
            <select className="mt-3 text-[14px] p-3 border-[#e5e5e5]"
            onChange={(e)=>{setLevel(e.target.value)}}>
              <option value={0} className="hidden">
                Experience Level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="pro">Expert</option>
            </select>
            <div className="mt-3">
              <button
                className="cancel rounded"
                onClick={() => {
                  setIsOpenSkill(false);
                }}
              >
                Cancel
              </button>
              <button
                className="update rounded"
                onClick={() => {
                  const skillUser={'skill':skill,'level':level};
                  setNewSkill([...newSkill,skillUser]);
                  setIsOpenSkill(false);
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

export default Skills;
