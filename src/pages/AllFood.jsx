import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import '../styles/allFood.css'
import '../styles/pagination.css'
import { Container, Row, Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection'
import products from '../assets/fake-data/products'
import ProductCart from '../components/UI/productCart/ProductCart'


const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(0)

  const searchProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  })

  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage

  const displayPage = searchProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  )

  const pageCount = Math.ceil(searchProduct.length / productPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return <Helmet title='All-foods'>
    <CommonSection title='All foods' />

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' xs='12'>
            <div className="search__widget d-flex align-items-center justify-content-between">
              <input type="text"
                placeholder='I`m looking for...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
            <div className="sorting__widget text-end">
              <select className='w-50'>
                <option>Default</option>
                <option value="ascending">Alphabetic, A-Z</option>
                <option value="descending">Alphabetic, Z-A</option>
                <option value="high-price">High price</option>
                <option value="low-price">Low price</option>
              </select>
            </div>
          </Col>
          {displayPage
            .map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                {/*  */}
                <ProductCart item={item} />
              </Col>
            ))}
          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="pagination"
            />
          </div>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default AllFood
