import React from "react";

const page = () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Online Fee Payment</h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Online Fee Payment
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
            
          <div className="row">
            <div className="col-md-12"> 
              <form className="w-50 p-4 p-md-5 border rounded-3 bg-light mx-auto">
              
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        id="rollno"
                        placeholder="Roll Number"
                      />
                      <label>Roll Number *</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className=" form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Student Name"
                      />
                      <label>Student Name *</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Enter yor email"
                      />
                      <label>Email id *</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobileno"
                        placeholder="Mobile No"
                      />
                      <label>Mobile No</label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <select
                        required=""
                        name="semester"
                        onchange="validateSem()"
                        id="stu_sem"
                        class="form-control"
                        size="1"
                      >
                        <option value="" selected="selected">
                          --Select Semester--
                        </option>
                        <option value="Semester - I" class="sem1">
                          Semester - I
                        </option>
                        <option value="Semester - II" class="sem1">
                          Semester - II
                        </option>
                        <option value="Semester - III" class="sem1">
                          Semester - III
                        </option>
                        <option value="Semester - IV" class="sem1">
                          Semester - IV
                        </option>
                        <option value="Semester - V" class="sem2">
                          Semester - V
                        </option>
                        <option value="Semester - VI" class="sem2">
                          Semester - VI
                        </option>
                        <option value="Semester - VII" class="sem2">
                          Semester - VII
                        </option>
                        <option value="Semester - VIII" class="sem2">
                          Semester - VIII
                        </option>
                        <option value="Ph.D. Yearly" class="sem3">
                          Ph.D. Yearly
                        </option>
                        <option
                          value="DMC and Degree Verification"
                          class="sem3"
                        >
                          DMC and Degree Verification
                        </option>
                      </select>
                      <label>Semester *</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <select
                        required=""
                        name="feetype"
                        onchange="validateFee()"
                        id="stu_fee_type"
                        class="form-control fee_type"
                        size="1"
                      >
                        <option value="">--Fee Type--</option>
                        <option value="Semester Fee"> Semester Fee</option>
                        <option value="Other Fee"> Other Fee</option>
                      </select>
                      <label>Fee Type *</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Amount"
                      />
                      <label>Amount *</label>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="w-100 mx-auto btn btn-lg btn-red"
                  value="Make Payment"
                ></input>
              </form>              
            </div>          
          </div>

           <div className="payment-guideline w-50 mx-auto">
                    <ul>
                        <li>Mandatory fields are marked with an asterisk (*)</li>
                        <li>Ph.D. Student Enter Registration Number as a Roll Number</li>
                        <li>If any query contact Office.uiet@kuk.ac.in</li>
                    </ul>
                </div>

          
        </div>
      </section>
    </div>
  );
};

export default page;
