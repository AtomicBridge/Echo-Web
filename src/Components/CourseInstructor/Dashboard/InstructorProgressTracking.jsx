import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './instructorhome.css';
import InstructorSidebar from './InstructorSidebar';
import InstructoreHeader from './InstructoreHeader';
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const InstructorProgressTracking = () => {
  
  // Default data and options
  const defaultData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    datasets: [
      {
        label: 'Total Course',
        data: [4, 6, 4, 11, 8, 9, 5, 6],
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        tension: 0.3,
        borderWidth: 4,
      },
      {
        label: 'Total Students Enroll',
        data: [8, 7, 9, 5, 7, 5, 7],
        borderColor: '#292D30',
        backgroundColor: '#292D30',
        tension: 0.3,
        borderWidth: 4,
      },
    ],
  };
  const plugin = {
    beforeInit(chart) {
      
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 20;
      };
    }
  };
  const defaultOptions = {
    
    scales: {
      
      y: {
        beginAtZero: true,
        
      },
     
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          color: '#7E7E7E',
          font: {
            size: 13,
            
          },
          useBorderRadius: true,
          borderRadius: 3,
          boxWidth: 13,
          
        },
      },
    },
    
  };

  // Options for the dropdown
  const selectOptions = ['Year', 'Month', 'Week'];

  // State to manage selected option and data
  const [selectedOption, setSelectedOption] = useState('Month');
  const [data, setData] = useState(defaultData);
  const [options, setOptions] = useState(defaultOptions);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    // Update data and options based on the selected option
    switch (option) {
      case 'Year':
        setData({
          labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021','2022','2023','2024'],
          datasets: [
            {
              label: 'Total Course',
              data: [20, 10, 30, 3, 9, 15, 50,34,22,42],
              borderColor: '#007BFF',
              backgroundColor: '#007BFF',
              tension: 0.3,
              borderWidth: 4,
            },
            {
              label: 'Total Students Enroll',
              data: [35, 40,50,34,22,42,10, 30, 3,25],
              borderColor: '#292D30',
              backgroundColor: '#292D30',
              tension: 0.3,
              borderWidth: 4,
            },
          ],
        });
        break;
      case 'Month':
        setData(defaultData); // Set back to default data
        break;
      case 'Week':
        setData({
          labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
          datasets: [
            {
              label: 'Total Course',
              data: [10, 17, 4, 6, 11, 2, 20],
              borderColor: '#007BFF',
              backgroundColor: '#007BFF',
              tension: 0.3,
              borderWidth: 4,
            },
            {
              label: 'Total Students Enroll',
              data: [15, 6, 11, 2, 20, 7,10],
              borderColor: '#292D30',
              backgroundColor: '#292D30',
              tension: 0.3,
              borderWidth: 4,
            },
          ],
        });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="overflow-hidden">
        <div className="row">
          {/* Sidebar */}
          <InstructorSidebar/>
          {/* Main Content */}
          <div className="col-md-10">
            <InstructoreHeader/>
            <div className='container-fluid my-4'>
              <h3 className='fw-bold'>Progress Tracking</h3>
              <div className='row'>
                <div className='col-md-4 instructorprogresstrackingmidborder'>
                  {[...Array(5)].map((_, index) => ( 
                    <div className="d-flex justify-content-center  my-3 mx-1">
                      <div className="card p-3 bg-white border-0 shadow rounded-4 d-flex flex-row align-items-center w-100">
                        <div className="about-product text-center">
                          <img className='img-fluid rounded-4' src="./img/courses/coursedetails/Rectangle 148464.png" width="80" height='80' />
                        </div>
                        <div className="stats  flex-grow-1">
                          <div className="px-3">
                            <div className="d-flex justify-content-between p-price ">
                              <Link to='/coursedetails' style={{ textDecoration: 'none', color:'black' }}>
                                <h6 className="mb-0"><b>UI/UX Designer Course</b></h6>
                              </Link>
                              
                                <div>
                                  <span className="badge py-2 " style={{ fontSize: '10px', background: 'rgba(29, 25, 28, 0.1)', color: 'black', padding: '5px 10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                    Beginners 
                                  </span>
                                </div>
                                
                              
                            </div>
                            <div className="d-flex justify-content-between p-price mt-3">
                              <span style={{fontSize:'13px'}}><b>$48</b></span>
                              <span style={{fontSize:'14px'}}><b>3 Month Course</b></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-7 instructorprogresstrackingadjust">
                  
                  <div className="col-md-11">
                  <div className="row ">
                    <div className='col-md-6'>
                      <div className="d-flex justify-content-center  my-3 mx-1">
                        <div className="card p-3 bg-white border-0 shadow rounded-4 d-flex flex-row align-items-center w-100">
                          <div className="stats  flex-grow-1">
                            <div className="p-3">
                              <div className=" p-price text-center">
                                <h6 className="mb-2"><b>1,24,456</b></h6>
                                <h6 className="mb-0" style={{fontSize:'12px'}}>Total Course</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className="d-flex justify-content-center  my-3 mx-1">
                        <div className="card p-3 bg-white border-0 shadow rounded-4 d-flex flex-row align-items-center w-100">
                          <div className="stats  flex-grow-1">
                            <div className="p-3">
                              <div className=" p-price text-center">
                                <h6 className="mb-2"><b>1,24,456</b></h6>
                                <h6 className="mb-0" style={{fontSize:'12px'}}>Total Students Enroll</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='px-4 shadow rounded-5 pt-5 pb-4'>
                  <div>
      <div className="dropdown" style={{ float: 'right' }}>
        <button className="btn btn-outline-secondary rounded-pill dropdown-toggle px-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          {selectedOption}
        </button>
        <ul className="dropdown-menu dropdown-menu-end rounded-3" aria-labelledby="dropdownMenuButton">
          {selectOptions.map((option, index) => (
            <li key={index}><a className="dropdown-item" onClick={() => handleOptionSelect(option)}>{option}</a></li>
          ))}
        </ul>
      </div>
    </div>
  <h5><b>Activities</b></h5>
  <Line data={data} plugins={[plugin]} options={options} height={180} />

</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructorProgressTracking;
