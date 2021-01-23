import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/actions';

export const Departaments = () => {
  const departaments = useSelector((state) => state.departaments);
  const dispatch = useDispatch();
  console.log(!!departaments);

  //   useEffect(() => {
  //     // if (!departaments) {
  //     dispatch(actions.fetchDepartaments());
  //     // }
  //   });

  useEffect(() => {
    dispatch(actions.fetchDepartaments());
  }, []);

  console.log(departaments);
  return (
    <div>
      <h1>hola</h1>
    </div>
  );
};
