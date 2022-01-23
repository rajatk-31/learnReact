import React from 'react';
import Person from './Person';

function NameList() {
    const names = ["ded","Sbh","sgh"]
    let list = names.map((e,i)=><Person key={i} person={e}></Person>)
  return <div>{list}</div>;
}

export default NameList;
