"use client";

import BillingDetails from "@/components/Student/Billings/BillingDetails/BillingDetails";
import {useGetUserInfoQuery, useUpdateUserInfoMutation} from "@/redux/features/student/profileInto/profileApi";
import React,{useState, useEffect} from "react";
import { antIcon, toastError, toastSuccess } from "@/utils/helper";

const BillingsPage = () => {

  const [userInfo, setUserInfo] = useState(null);
   // Get user profile details
  const {
    data: userInfoData,
    isSuccess: userInfoIsSuccess,
    isLoading: userInfoIsLoading,
    error: userInfoError,
    refetch: userInfoRefetch,
    isFetching: userInfoIsFetching,
  } = useGetUserInfoQuery();
  //update user info
   const [
      updateUserInfo,
      {
        data: updateInfoData,
        isLoading: updateInfoIsLoading,
        isSuccess: updateInfoIsSuccess,
        isError: updateInfoIsError,
        error: updateInfoResponseError,
      },
    ] = useUpdateUserInfoMutation();


  const handleSave = (updatedData) => {
    updateUserInfo(updatedData);
   
  };

  //set user info when api call success
  useEffect(()=>{
    if(userInfoIsSuccess){
      setUserInfo((prev)=>({...prev,...userInfoData?.data}))
    }
  },[userInfoIsSuccess, userInfoData])
  // user info update
  useEffect(()=>{
    if(updateInfoIsSuccess){
      toastSuccess("Billing information updated successfully");
    }
  },[updateInfoIsSuccess, updateInfoData])

  // console.log("userInfo userInfoData", userInfo)

  return (
    <>
      <BillingDetails
        title="Billing Info"
        fields={userInfo}
        onSave={handleSave}
        buttonIsLoading={updateInfoIsLoading}
      />
    </>
  );
};

export default BillingsPage;
