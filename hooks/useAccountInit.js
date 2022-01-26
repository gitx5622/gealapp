import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {getAllRoles} from "../state/actions/roleAction";

const useAccountInit = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // const { b_username } = router.query;

  useEffect(() => {
      getAllRoles(dispatch);
  }, [dispatch]);

  // for businesses that are not live and for pages that don't SSR
  // useEffect(() => {
  //   if (business_username === '' && b_username) {
  //     getMerchantProfile(dispatch, b_username, false);
  //   }
  // }, [b_username, business_username, dispatch]);
};

export default useAccountInit;
