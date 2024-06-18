import React, { useState } from 'react';
const ProfileCard = ({ avatar, setAvatar, setUserName, userName }) => {
  const handleChangeImage = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [isChangeName, setIsChangeName] = useState(false);
  const [temporaryName,setTemporaryName]=useState('');
  const renderFormChangeName = () => {
    return <form>
    <input
      type="text"
      maxLength={70}
      className="border-none underline"
      placeholder="Change your name"
      autoComplete="off"
      defaultValue={userName}
      onChange={(e)=>{
        setTemporaryName(e.target.value);
      }}
    />
    <div className="flex justify-center mt-2">
      <button onClick={()=>{
        setIsChangeName(false)}} className=" px-3 py-2 mr-2 border border-green-500 text-green rounded hover:bg-green-500 hover:text-white">
        Cancel
      </button>
      <button onClick={()=>{
        setUserName(temporaryName);
        setIsChangeName(false)}} className=" px-3 py-2 bg-green-500 rounded">
        Update
      </button>
    </div>
          </form>;
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-10">
        <div className="flex flex-col items-center">
          <label
            className="cursor-pointer relative mb-5 w-[150px] h-[150px]"
            htmlFor="avatar"
          >
            <div className="z-30 w-[150px] h-[150px] absolute camera-icon hover:bg-black opacity-0 hover:opacity-65 rounded-full fill-white">
              <span className=" absolute top-[55px] left-[55px]">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5.8182C6.29294 5.8182 4.90909 7.20205 4.90909 8.90911C4.90909 10.6162 6.29294 12 8 12C9.70706 12 11.0909 10.6162 11.0909 8.90911C11.0909 7.20205 9.70706 5.8182 8 5.8182Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.45455 15.2727C1.06878 15.2727 0.698807 15.1195 0.426027 14.8467C0.153246 14.5739 0 14.204 0 13.8182V4.36366C0 3.97789 0.153246 3.60792 0.426027 3.33514C0.698807 3.06236 1.06878 2.90911 1.45455 2.90911H4.36364L5.81818 0.727295H10.1818L11.6364 2.90911H14.5455C14.9312 2.90911 15.3012 3.06236 15.574 3.33514C15.8468 3.60792 16 3.97789 16 4.36366V13.8182C16 14.204 15.8468 14.5739 15.574 14.8467C15.3012 15.1195 14.9312 15.2727 14.5455 15.2727H1.45455ZM3.81818 8.90911C3.81818 6.59956 5.69045 4.72729 8 4.72729C10.3096 4.72729 12.1818 6.59956 12.1818 8.90911C12.1818 11.2187 10.3096 13.0909 8 13.0909C5.69045 13.0909 3.81818 11.2187 3.81818 8.90911ZM2.90909 5.09093C2.90909 5.49259 2.58348 5.8182 2.18182 5.8182C1.78016 5.8182 1.45455 5.49259 1.45455 5.09093C1.45455 4.68927 1.78016 4.36366 2.18182 4.36366C2.58348 4.36366 2.90909 4.68927 2.90909 5.09093Z"
                  />
                </svg>
              </span>
            </div>
            <input
              type="file"
              accept="image/*"
              id="avatar"
              className="hidden"
              onChange={handleChangeImage}
            />
            <div className="z-20 w-[150px] h-[150px] relative rouded-full bg-white">
              <img src={avatar} className="rounded-full w-full h-full" alt="" />
            </div>
          </label>
          {!isChangeName?(<div className="flex">
            <p>{userName}</p>
            <button
              onClick={() => {
                setIsChangeName(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-2 w-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>):renderFormChangeName()}
        </div>
        <div className="mt-5 flex justify-center">
          <button className="px-[50px] py-[10px] rounded-lg border-2 hover:bg-[#74767e] hover:text-white">
            Preview Fiver Profile
          </button>
        </div>
        <div className="bottomContent mt-5">
          <div className="flex justify-between">
            <span className="flex text-[#62646A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[15px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              From
            </span>
            <b className="text-[#62646A]">Việt Nam</b>
          </div>
          <div className="flex justify-between">
            <span className="flex text-[#62646A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[15px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Member since
            </span>
            <b className="text-[#62646A]">Jan 2022</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
