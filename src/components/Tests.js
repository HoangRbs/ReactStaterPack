import React from 'react';

//UI / functional / stateless component -> just focus on UI
const Tests =(props) => {
  const { tests_list } = props;

  const tests_list_JSX = tests_list.map((test) => {

    return test.testage > 19 ? ( //JSX
      <div className = "test" key = {test.id}>
        <div>test profile: {test.testname}</div>
        <div>test info: {test.testage}</div>
      </div>
    ) : null;
  });

  return( //JSX
    <div className = "tests_list">
      { tests_list_JSX } {/*JSX inside*/}
    </div>
  )
}

export default Tests;