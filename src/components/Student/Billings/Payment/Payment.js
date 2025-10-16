

"use client";

import React, { useState, useEffect } from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import {useGetBeneficiariesQuery, useCreateBeneficiaryMutation, useUpdateBeneficiaryMutation, useDeleteBeneficiaryMutation} from "@/redux/features/common/beneficiary/beneficiaryApi";
import {getLastTwoDigits} from "@/utils/helper";
import img from "@/assets/images/all/american.png";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { antIcon, toastError, toastSuccess, appendInFormData, confirmDelete } from "@/utils/helper";
import { Spin } from "antd";
import { set } from 'nprogress';
import { EditOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';

// ✅ create Schema validation
const createSchema = yup.object({
  image: yup
  .mixed()
  .nullable()
  .test("fileSize", "File size must be less than 2MB", (value) => {
    if (!value) return true;
    return value.size <= 2 * 1024 * 1024;
  })
  .test("fileType", "Only image files are allowed", (value) => {
    if (!value) return true;
    return ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(value.type);
  }),

  beneficiary_name: yup.string().required("Beneficiary name is required"),
  type: yup.string().required("Type is required"),
  card_number: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits"),
  card_holder_name: yup.string().required("Card holder name is required"),
  expire_month: yup
    .string()
    .required("Expiry month is required")
    .matches(/^(0[1-9]|1[0-2])$/, "Expiry month must be 01-12"),
  expire_year: yup
    .string()
    .required("Expiry year is required")
    .matches(/^\d{2}$/, "Expiry year must be 2 digits"),
  // cvv: yup
  //   .string()
  //   .required("CVV is required")
  //   .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

// ✅ create Schema validation
const updateSchema = yup.object({
  image: yup
  .mixed()
  .nullable()
  .test("fileSize", "File size must be less than 2MB", (value) => {
    if (!value) return true;
    return value.size <= 2 * 1024 * 1024;
  })
  .test("fileType", "Only image files are allowed", (value) => {
    if (!value) return true;
    return ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(value.type);
  }),

  beneficiary_name: yup.string().required("Beneficiary name is required"),
  type: yup.string().required("Type is required"),
  card_number: yup
    .string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits"),
  card_holder_name: yup.string().required("Card holder name is required"),
  expire_month: yup
    .string()
    .required("Expiry month is required")
    .matches(/^(0[1-9]|1[0-2])$/, "Expiry month must be 01-12"),
  expire_year: yup
    .string()
    .required("Expiry year is required")
    .matches(/^\d{2}$/, "Expiry year must be 2 digits"),
  // cvv: yup
  //   .string()
  //   .required("CVV is required")
  //   .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

const Payment = ({ title = "Credit Card", cards = [], methods = [] }) => {
  //for create card
  const [showInputs, setShowInputs] = useState(false);

  //for edit card
  const [showEditInputs, setShowEditInputs] = useState(false);
  const [selectedUuid, setSelectedUuid] = useState(null);

  //get all beneificiaries
  const [beneficiaries, setBeneficiaries] = useState([]);
  //preview image
  const [previewImage, setPreviewImage] = useState(null);

  // ✅ Initialize react-hook-form with default values
  const {
    register:createRegister,
    handleSubmit:createHandleSubmit,
    formState: { errors: createErrors },
    reset:createReset,
    setValue:createSetValue,
    getValues:createGetValues,
  } = useForm({
    resolver: yupResolver(createSchema)
  });
  // ✅ update Initialize react-hook-form with default values
  const {
    register:updateRegister,
    handleSubmit:updateHandleSubmit,
    formState: { errors: updateErrors },
    reset:updateReset,
    setValue:updateSetValue,
    getValues:updateGetValues,
    watch:updateWatch,
  } = useForm({
    resolver: yupResolver(updateSchema)
  });
  
  //fetch beneficiaries
  const { 
    data:beneficiaryData,
    isSuccess, 
    isLoading, 
    error, 
    refetch,
    isFetching 
    } = useGetBeneficiariesQuery();

  //create beneficiary mutation
  const [createBeneficiary  , 
    { 
      data:createBeneficiaryData,
      isLoading: createBeneficiaryIsLoading, 
      isSuccess: createBeneficiaryIsSuccess,
      isError: createBeneficiaryIsError,
      error: createBeneficiaryError }] = useCreateBeneficiaryMutation();
  //update beneficiary mutation
  const [updateBeneficiary  , 
    { 
      data:updateBeneficiaryData,
      isLoading: updateBeneficiaryIsLoading, 
      isSuccess: updateBeneficiaryIsSuccess,
      isError: updateBeneficiaryIsError,
      error: updateBeneficiaryError }] = useUpdateBeneficiaryMutation();
  //Delete beneficiary mutation
  const [deleteBeneficiary  , 
    { 
      data:deleteBeneficiaryData,
      isLoading: deleteBeneficiaryIsLoading, 
      isSuccess: deleteBeneficiaryIsSuccess,
      isError: deleteBeneficiaryIsError,
      error: deleteBeneficiaryError }] = useDeleteBeneficiaryMutation();


  const handleAddNewCard = () => {
    setShowInputs(!showInputs);
    //for edit mode
    setShowEditInputs(false);
    setSelectedUuid(null);
    //reset preview image
    setPreviewImage(null);
  };

  //create handle for image
  const handleCreateImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      createSetValue("image", file); // ✅ Correct (this stores File)
    }
  };
    //update handle for image
  const handleUpdateImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      updateSetValue("image", file); // ✅ Correct (this stores File)
    }
  };


   // ✅ Handle save with validation
  const onCreateSubmit = async (data) => {
     try {
      // Call mutation
      await createBeneficiary(appendInFormData(data));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

    // ✅ Handle update with validation

  // Component
  const onUpdateSubmit = async (data) => {
    
    try {
      const formData = appendInFormData(data);
      await updateBeneficiary({ uuid: selectedUuid, formData }).unwrap();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const deleteBeneficiaryHandler = async (uuid) => {
    if(!uuid) return;
    confirmDelete().then(async (confirmed) => {
      if (confirmed) {
        setSelectedUuid(uuid);
        await deleteBeneficiary({ uuid }).unwrap();
      }
    });
  }
    //edit beneficiary handler
  const editBeneficiaryHandler = async (uuid) => {
    if(!uuid) return;
    let find = beneficiaries.find(b => b.uuid === uuid);
    if(!find) return;

    setShowEditInputs(selectedUuid === find?.uuid ? !showEditInputs : true);
    setSelectedUuid(find?.uuid);
    setShowInputs(false);

    updateReset({
      image: null,
      type:  1,
      beneficiary_name: find?.beneficiary_name || "",
      card_number: find?.card_number || "",
      card_holder_name: find?.card_holder_name || "",
      expire_month: find?.expire_month || "",
      expire_year: find?.expire_year || "",
    })
    setPreviewImage(find?.image_url || null);
  }

  //set beneficiaries when data changes
  useEffect(()=>{
    if(isSuccess ){
      setBeneficiaries([
        ...beneficiaryData?.data?.data
      ]);
    }
  }, [beneficiaryData, isSuccess]);

  //set schema value
  useEffect(()=>{
    createSetValue("type", 1);
    updateSetValue("type", 1);
  },[])

  //handle create beneficiary success error
  useEffect(()=>{
    if(createBeneficiaryIsSuccess){
      toastSuccess(createBeneficiaryData?.message || "Card added successfully");
      //reset create schema
       const currentType = createGetValues("type");
      createReset({ type: currentType,image: null, beneficiary_name: "", card_number: "", card_holder_name: "", expire_month: "", expire_year: "" });

      setPreviewImage(null);
      //response data store
      setBeneficiaries((prev) => {
        const newBeneficiary = createBeneficiaryData?.data;
        if (newBeneficiary) {
          return [newBeneficiary, ...prev];
        }
        return prev;
      });
    }
    if(createBeneficiaryIsError){
      toastError(createBeneficiaryError?.message || "Card added failed. Please try again.");
    }
  }, [createBeneficiaryIsSuccess, createBeneficiaryData, createBeneficiaryIsError,createBeneficiaryError]);

  //handle update beneficiary success error
  useEffect(()=>{
    if(updateBeneficiaryIsSuccess && updateBeneficiaryData){
        toastSuccess(updateBeneficiaryData?.message || "Card updated successfully");
        setBeneficiaries((prev)=>{
          return prev.map((b)=>{
            if(b.uuid === selectedUuid){
              return {
               ...b,
               image_url: previewImage ? previewImage : b.image_url,
               beneficiary_name: updateGetValues("beneficiary_name"),
               card_number: updateGetValues("card_number"),
               card_holder_name: updateGetValues("card_holder_name"),
               expire_month: updateGetValues("expire_month"),
               expire_year: updateGetValues("expire_year"),
              };
            }
            return b;
          });
        });

        //reset hook data
        setShowEditInputs(false);
        setSelectedUuid(null);
        setShowInputs(false);
        setPreviewImage(null);
      }
    if(updateBeneficiaryIsError){
      toastError(updateBeneficiaryError?.data?.message || "Card update failed. Please try again.");
    }
  },[updateBeneficiaryIsSuccess,updateBeneficiaryData,updateBeneficiaryIsError,updateBeneficiaryError])

  //delete beneficiary success error
  useEffect(() => {
    if (deleteBeneficiaryIsSuccess) {
      console.log("deleteBeneficiaryData", deleteBeneficiaryData, selectedUuid);
      toastSuccess(deleteBeneficiaryData?.message || "Card deleted successfully");

      setBeneficiaries((prev) => prev.filter((b) => b.uuid !== selectedUuid));

      // ✅ Reset selected item after deletion
      setSelectedUuid(null);
    }

    if (deleteBeneficiaryIsError) {
      toastError(
        deleteBeneficiaryError?.data?.message || "Card delete failed. Please try again."
      );
    }
  }, [
    deleteBeneficiaryIsSuccess,
    deleteBeneficiaryIsError,
    deleteBeneficiaryData,
    deleteBeneficiaryError
  ]);


  console.log("Beneficiaries:", beneficiaries);

  return (
    <div className={styles.paymentMethodsContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h6 className={styles.title}>{title}</h6>
          <span className={styles.subtitle}>Current Payment Method</span>
        </div>

        <button className="ic_common_primary_btn" onClick={handleAddNewCard}>
          {showInputs ? "CANCEL" : "ADD NEW CARD"}
        </button>
      </div>
    
      {/* Credit Cards */}

      <div className={styles.creditCardsSection}>
        <div className={styles.cardsGrid}>
          {beneficiaries && beneficiaries.length > 0 && beneficiaries.map((card) => (
            <div key={card.id} className={`${styles.creditCard} ${
              card?.id === selectedUuid ? styles.creditCard_hover : ""
              }`} >
              <div className={styles.cardActions}>
                {
                  selectedUuid == card?.uuid && showEditInputs ? 
                  <CloseCircleOutlined onClick={()=>{
                     setShowEditInputs(selectedUuid === card?.uuid ? !showEditInputs : false);
                     setSelectedUuid(null);
                      setShowInputs(false);
                  }} /> :
                  (
                    <EditOutlined 
                      className={styles.iconEdit}
                      onClick={()=>{
                        editBeneficiaryHandler(card?.uuid);
                       
                      }}
                    />
                  )
                }
                {
                  deleteBeneficiaryIsLoading && selectedUuid == card?.uuid && <Spin indicator={antIcon} />
                }
                
                <DeleteOutlined 
                  className={styles.iconDelete}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle delete action
                    // Add your delete logic here
                    deleteBeneficiaryHandler(card?.uuid);
                  }}
                />
              </div>
              <div className={styles.cardHeader}>
                <Image
                  className={styles.ic_img}
                  src={card?.image ? card?.image_url : img}
                  alt="Card Logo"
                  width={200}
                  height={10}
                />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardNumber}>
                  <span className={styles.cardLabel}>Card Number</span>
                  <span className={styles.cardValue}>
                    {card?.mask_card_number || "•••• •••• •••• 0000"}
                  </span>
                </div>
                <div className={styles.cardExpiry}>
                  <span className={styles.expiryLabel}>
                    Expiry - {`${getLastTwoDigits(card?.expire_month)}/${getLastTwoDigits(card?.expire_year)}` || "00/00"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Fields (appear after clicking ADD NEW CARD) */}
      {/* update form */}
      {showEditInputs && (
        <div>
          <button className="ic_common_primary_btn .ic_text_end"
          onClick={
            ()=> updateHandleSubmit(onUpdateSubmit)()
          }
          >
            Update Card
            {
              updateBeneficiaryIsLoading && selectedUuid && <Spin indicator={antIcon} />
            }
          </button>
          <div
            
            className={`${styles.infoGrid} 
            }`}
          >
             {/* ✅ Card Image Upload */}
           <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Image</span>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                
                {/* Upload Box */}
                <label 
                  htmlFor="cardImage" 
                  className={styles.card_img_label}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = "#007bff"}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = "#ccc"}
                >
                  <span style={{ color: "#888", fontSize: "14px" }}>+ Upload</span>
                  <input
                    id="cardImage"
                    type="file"
                    accept="image/*"
                    onChange={handleUpdateImageChange}
                    style={{ display: "none" }}
                  />
                </label>

                {/* Preview Image */}
                {previewImage && (
                  <div
                    style={{
                      width: "379px",
                      height: "100px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Image
                      src={previewImage}
                      alt="Card Preview"
                      width={150}
                      height={100}
                      style={{
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                )}
              </div>

              {updateErrors.image && (
                <small className="text-danger">{updateErrors.image.message}</small>
              )}
            </div>


            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Beneficiary Name</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter beneficiary name"
                  className={styles.infoValue}
                  {...updateRegister("beneficiary_name")}
                />
                {updateErrors.beneficiary_name && (
                  <small className="text-danger">{updateErrors.beneficiary_name.message}</small>
                )}
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Number</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter card number"
                  className={styles.infoValue}
                  {...updateRegister("card_number")}
                />
                {updateErrors.card_number && (
                  <small className="text-danger">{updateErrors.card_number.message}</small>
                )}
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Holder Name</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter name on card holder"
                  className={styles.infoValue}
                  {...updateRegister("card_holder_name")}
                />
                {updateErrors.card_holder_name && (
                  <small className="text-danger">{updateErrors.card_holder_name.message}</small>
                )}
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Expiry Month</span>
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  className={styles.infoValue}
                  {...updateRegister("expire_month")}
                />
                  {updateErrors.expire_month && (
                  <small className="text-danger">{updateErrors.expire_month.message}</small>
                )}
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Expiry year</span>
              <div>
                <input
                  type="text"
                  placeholder="YY"
                  className={styles.infoValue}
                  {...updateRegister("expire_year")}
                />
                  {updateErrors.expire_year && (
                  <small className="text-danger">{updateErrors.expire_year.message}</small>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
      {/* save form */}
      {!showEditInputs && showInputs && (
        <div>
          <button className="ic_common_primary_btn .ic_text_end" onClick={
            ()=> createHandleSubmit(onCreateSubmit)()
          }>
            Save Card {
              createBeneficiaryIsLoading && <Spin indicator={antIcon} />
            }
          </button>
          <div
           
        
            className={`${styles.infoGrid} 
            }`}
          >
            {/* ✅ Card Image Upload */}
           <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Image</span>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                
                {/* Upload Box */}
                <label 
                  htmlFor="cardImage" 
                  className={styles.card_img_label}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = "#007bff"}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = "#ccc"}
                >
                  <span style={{ color: "#888", fontSize: "14px" }}>+ Upload</span>
                  <input
                    id="cardImage"
                    type="file"
                    accept="image/*"
                    onChange={handleCreateImageChange}
                    style={{ display: "none" }}
                  />
                </label>

                {/* Preview Image */}
                {previewImage && (
                  <div
                    style={{
                      width: "379px",
                      height: "100px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Image
                      src={previewImage}
                      alt="Card Preview"
                      width={150}
                      height={100}
                      style={{
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                )}
              </div>

              {createErrors.image && (
                <small className="text-danger">{createErrors.image.message}</small>
              )}
            </div>


            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Beneficiary Name</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter beneficiary name"
                  className={styles.infoValue}
                  {...createRegister("beneficiary_name")}
                />
                {createErrors.beneficiary_name && (
                  <small className="text-danger">{createErrors.beneficiary_name.message}</small>
                )}
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Number</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter card number"
                  className={styles.infoValue}
                  {...createRegister("card_number")}
                />
                {createErrors.card_number && (
                  <small className="text-danger">{createErrors.card_number.message}</small>
                )}
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Card Holder Name</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter name on card holder"
                  className={styles.infoValue}
                  {...createRegister("card_holder_name")}
                />
                {createErrors.card_holder_name && (
                  <small className="text-danger">{createErrors.card_holder_name.message}</small>
                )}
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Expiry Month</span>
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  className={styles.infoValue}
                  {...createRegister("expire_month")}
                />
                  {createErrors.expire_month && (
                  <small className="text-danger">{createErrors.expire_month.message}</small>
                )}
              </div>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Expiry year</span>
              <div>
                <input
                  type="text"
                  placeholder="YY"
                  className={styles.infoValue}
                  {...createRegister("expire_year")}
                />
                  {createErrors.expire_year && (
                  <small className="text-danger">{createErrors.expire_year.message}</small>
                )}
              </div>
            </div>


            {/* <div className={styles.infoRow}>
              <span className={styles.infoLabel}>CVV</span>
              <div>
                <input
                  type="text"
                  placeholder="Enter CVV"
                  className={styles.infoValue}
                />
              </div>
            </div> */}
          </div>
        </div>
      )}

      {/* Available Payment Methods */}
      <div>
        <h6 className={styles.title}>Available Payment Methods</h6>
        <div className={styles.methodsList}>
          {methods.map((method) => (
            <div key={method.id} className={styles.paymentMethod}>
              <div className={styles.ic_payment_img_container}>
                <Image src={method.img} alt={method.label} />
              </div>
              <span>{method.label}</span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Payment;
