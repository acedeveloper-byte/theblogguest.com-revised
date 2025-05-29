"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Form,
  Col,
  Container,
  Row,
  Button,
  Spinner,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Page = () => {
  const [user_data, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const authData = localStorage.getItem("auth_data");
    if (authData) {
      setUser(JSON.parse(authData));
    }
  }, []);

  const Guest_Posting_APi = async (data, router, setLoading) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("status", data.status);
      formData.append("user_id", data.user_id);
      formData.append("file", data.file);

      const response = await fetch(
        "http://localhost:7500/v2/post/create-new-post", 
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Post submitted successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: result.message || "Submission failed.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileExists",
        "Please upload a file",
        (value) => value instanceof File
      )
      .test("fileType", "Only JPG and PNG files are allowed", (value) => {
        if (!value) return false;
        const allowedTypes = ["image/jpeg", "image/png"];
        return allowedTypes.includes(value.type);
      }),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const submissionData = {
        title: values.title,
        file: values.file,
        status: true,
        content: values.content,
        category: values.category,
        user_id: user_data?._id,
      };

      await Guest_Posting_APi(submissionData, router, setLoading);
      formik.resetForm();
    },
  });

  const categories = [
    "Sales",
    "Technology",
    "Healthy Lifestyle",
    "Fashion",
    "Business",
    "Design",
    "Education",
    "Entertainment",
    "Home & Lifestyle",
    "Digital Marketing",
    "Social Media",
    "Music",
    "Other",
    "Politics",
    "Real Estate",
    "Sports",
    "Travel",
    "Wellness",
  ];

  return (
    <>
      <Header />
      <div className="write-wrapper">
        <Card className="write-with-us">
          <Card.Header className="fw-bold">Write With Us</Card.Header>
          <Card.Body>
            <Container fluid>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title"
                      {...formik.getFieldProps("title")}
                      isInvalid={formik.touched.title && formik.errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Select {...formik.getFieldProps("category")}>
                      <option value="">Select Category</option>
                      {categories.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.category}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} md="12" controlId="file">
                    <Form.Label className="my-3">Upload File</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(event) =>
                        formik.setFieldValue("file", event.currentTarget.files[0])
                      }
                      isInvalid={formik.touched.file && !!formik.errors.file}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" as={Col} md="12">
                  <Form.Label>Content</Form.Label>
                  <Editor
                    apiKey="js3uunm9tdph718l08kpjj9r8xwtv0wpuezj2nzvnjnuvpsa"
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    value={formik.values.content}
                    onEditorChange={(content) =>
                      formik.setFieldValue("content", content)
                    }
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "link image | removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                  {formik.touched.content && formik.errors.content && (
                    <div className="text-danger">{formik.errors.content}</div>
                  )}
                </Form.Group>

                <Form.Group as={Col} md={8}>
                  {user_data?.user_name ? (
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />{" "}
                          Submitting...
                        </>
                      ) : (
                        "Submit Article"
                      )}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="submit-btn"
                      onClick={() => router.push("/login")}
                    >
                      Login to Submit Post
                    </Button>
                  )}
                </Form.Group>
              </Form>
            </Container>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Page;
