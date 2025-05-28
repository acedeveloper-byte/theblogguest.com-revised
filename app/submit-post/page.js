"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const page = () => {
  const [user_data, setUser] = useState(false);
  const [loading, setloading] = useState(false)
  const editorRef = useRef(null);
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("auth_data")) {
      setUser(JSON.parse(localStorage.getItem("auth_data")))
    }

  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
    file: Yup.mixed()
      .required("File is required")
      .test("fileExists", "Please upload a file", value => value instanceof File)
      .test("fileType", "Only JPG and PNG files are allowed", value => {
        if (!value) return false;
        const allowedTypes = ['image/jpeg', 'image/png'];
        return allowedTypes.includes(value.type);
      })
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
      // { title, status, content, category, user_id }
      const valuess = { title: values.title, file: values.file, status: true, content: values.content, category: values.category, user_id: user_data._id }

      await Guest_Posting_APi(valuess, router, setloading)

    },
  });

  return (
    <>
      <Header/>
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
                {[
                  { value: "Sales", label: "Sales" },
                  { value: "Tech", label: "Technology" },
                  { value: "Healthy", label: "Healthy Lifestyle" },
                  { value: "Fashion", label: "Fashion" },
                  { value: "Business", label: "Business" },
                  { value: "Design", label: "Design" },
                  { value: "Education", label: "Education" },
                  { value: "Entertainment", label: "Entertainment" },
                  { value: "Home & Lifestyle", label: "Home & Lifestyle" },
                  { value: "Digital Marketing", label: "Digital Marketing" },
                  { value: "Social Media", label: "Social Media" },
                  { value: "Music", label: "Music" },
                  { value: "Other", label: "Other" },
                  { value: "Politics", label: "Politics" },
                  { value: "Real Estate", label: "Real Estate" },
                  { value: "Sports", label: "Sports" },
                  { value: "Technology", label: "Technology" },
                  { value: "Travel", label: "Travel" },
                  { value: "Wellness", label: "Wellness" },
                ].map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
              </Form.Select>
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
                  "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                  "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                  "insertdatetime", "media", "table", "help", "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "link image | removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            {formik.touched.content && formik.errors.content && (
              <div className="text-danger">{formik.errors.content}</div>
            )}
          </Form.Group>

          <Form.Group as={Col} md={8}>
            {user_data.user_name ? (
              <Button type="submit">
                {loading ? <Spinner /> : "Submit article"}
              </Button>
            ) : (
              <Button type="button" className="submit-btn">
                 Submit Post
              </Button>
            )}
          </Form.Group>
        </Form>
      </Container>
    </Card.Body>
  </Card>
</div>

      <Footer/>
    </>
  );
};

export default page;
