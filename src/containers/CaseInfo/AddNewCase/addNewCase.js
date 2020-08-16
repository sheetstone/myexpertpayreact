/*
 * Add New Cases
 */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Form } from "react-bootstrap";

import { addCase, updateCase } from "api/caseApi.js";
import { formSettings, formCreator } from "./caseForm.js";

import SuccessModal from "./SuccessModal/successModal";
import CaseInput from "./CaseInput/caseInput";
import equal from "deep-equal";

const AddNewCase = (props) => {
  const updateKey = props.location.state && props.location.state.key;
  const initalState = props.location.state && props.location.state.case;

  const { register, handleSubmit, errors, formState, reset } = useForm(
    formSettings
  );

  const { caseNumber, ncpName, initalChildrenList } = formCreator(register,formState,initalState,errors);
  const [childrenName, setChildrenName] = useState(initalChildrenList);
  const [showSuccess, setShowSuccess] = useState(false);

  const addChildHandler = (e) => {
    setChildrenName((prevEle) => {
      return prevEle.concat({
        type: "text",
        name: "childname",
        ref: register,
        placeholder: "Child Name",
      });
    });
  };

  const removeChildHandler = (e, index) => {
    setChildrenName((prevEle) => {
      if (prevEle.length === 1) {
        return prevEle;
      }
      prevEle.splice(index, 1);
      return [...prevEle];
    });
  };

  const formElementNode = () => {
    const formArray = [];
    formArray.push(
      <CaseInput
        objkey="caseNumber"
        value={caseNumber}
        errors={errors}
        key="caseNumber"
      />
    );
    formArray.push(
      <CaseInput
        objkey="ncpName"
        value={ncpName}
        errors={errors}
        key="ncpName"
      />
    );
    formArray.push(
      childrenName.map((item, i, arr) => {
        const kidId = `childName${i}`;
        return (
          <CaseInput
            objkey={kidId}
            isChild
            isTail={arr.length - 1 === i}
            value={item}
            errors={errors}
            key={kidId}
            addChild={addChildHandler}
            removeChild={() => removeChildHandler(i)}
          />
        );
      })
    );

    return formArray;
  };

  const gotoCaseInfo = () => {
    props.history.push("/caseinfo");
  };

  const resetForm = () => {
    setChildrenName(initalChildrenList);
    reset({
      caseNumber: "",
      ncpName: "",
      childName0: "",
      childName: "",
    });
    setShowSuccess(false);
    console.log(formState);
  };

  const onSubmit = (data) => {
    const result = {};
    result.children = [];
    for (const [key, value] of Object.entries(data)) {
      if (key.includes("childName")) {
        result.children.push(value);
      } else {
        result[key] = value;
      }
    }

    if (updateKey) {
      // Update Exist Case
      if (equal(result, initalState)) {
        console.log("no need update database");
        gotoCaseInfo();
      } else {
        updateCase(updateKey, result).then((res) => {
          // TODO: add a modal to comfirmation
          gotoCaseInfo();
        });
      }
    } else {
      // Add new case
      addCase(result).then((res) => {
        // console.log('Add successful',res);
        // TODO: add a modal to comfirmation
        setShowSuccess(true);
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>
      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {formElementNode()}
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="link" type="button" onClick={gotoCaseInfo}>
              Cancel
            </Button>
            <SuccessModal
              show={showSuccess}
              noed={gotoCaseInfo}
              yesed={resetForm}
            />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddNewCase;
