import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Fashion = () => {
  return (
    <div>
      <h5 className="border-start border-3 border-danger ps-2 mb-3">Fashion</h5>
          <Card className="text-white mb-3">
            <Card.Img   src="/images/photo1.jpg"  alt="Khushi Kapoor" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <Button size="sm"  className="mb-2 button-layouts">
                Fashion
              </Button>
              <Card.Title className="fw-bold">
                Khushi Kapoor in tiny string bikini raised the heat.
              </Card.Title>
              <Card.Text className="small">May 18, 2025 / Amelia Xyonch</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="text-white">
            <Card.Img src="/images/photo2.jpg" alt="Vaibhavi Joshi" />
            <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex flex-column justify-content-end">
              <Button size="sm"  className="mb-2 button-layouts">
                Fashion
              </Button>
              <Card.Title className="fw-bold">
                Vaibhavi Joshi in bikini put on a busty display – see sizzling hot pool photoshoot.
              </Card.Title>
              <Card.Text className="small">May 17, 2025 / Amelia Xyonch</Card.Text>
            </Card.ImgOverlay>
          </Card>
    </div>
  )
}

export default Fashion
