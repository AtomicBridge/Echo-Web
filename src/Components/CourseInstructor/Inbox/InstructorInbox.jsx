import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Dashboard/instructorhome.css';
import InstructorSidebar from '../Dashboard/InstructorSidebar';
import InstructoreHeader from '../Dashboard/InstructoreHeader';
import Picker from '@emoji-mart/react'
import '../../Inbox/inbox.css';
const InstructorInbox = () => {
    const [message, setMessage] = useState('');
    const [showPicker, setShowPicker] = useState(false);
	const [perLine, setPerLine] = useState(25);
	const [selectedFile, setSelectedFile] = useState(null);
    const [showSend, setShowSend] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
		
        // You can perform further actions with the selected file here
    };
	const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedImage(file);
            // You can perform further actions with the selected image here
        } else {
            alert('Please select a valid image file.');
        }
    };
    const handleInputChange = (e) => {
        setMessage(e.target.value);
		setShowSend(e.target.value.trim() !== '');
    };

	const handleEmojiClick = (emoji) => {
		setMessage(message + emoji.native);
	};

    const togglePicker = () => {
        setShowPicker(!showPicker);
    };
	const handlepicker = () => {
        setShowPicker(false);
    };
    const handleSend = () => {
        setMessage('');
    };
	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
		  return text.substring(0, maxLength) + '....';
		}
		return text;
	  };

	useEffect(() => {
		// Function to scroll to the bottom of the chat container
		const scrollToBottom = () => {
		  const chatContainer = document.querySelector('.chat-messages');
		  if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		  }
		};
	
		// Call the scrollToBottom function when the component mounts
		scrollToBottom();
		const calculatePerLine = () => {
            const emojiPickerWrapper = document.querySelector('.emoji-picker-wrapper');
            if (emojiPickerWrapper) {
                const wrapperWidth = emojiPickerWrapper.clientWidth;
                const emojisPerLine = Math.floor(wrapperWidth / 36); // Assuming each emoji button is 36px wide
                setPerLine(emojisPerLine);
            }
        };

        // Call the calculatePerLine function when the component mounts
        calculatePerLine();

        // Recalculate the number of emojis per line when the window is resized
        window.addEventListener('resize', calculatePerLine);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', calculatePerLine);
        };
	  }, []);
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
            <h3 className='fw-bold'>Inbox</h3>
            <div className=" my-4">
            <main class="content"  style={{marginBottom:'10%'}}>
    <div class=" p-0">

	

		<div class="card rounded-4">
			<div class="row g-0">
				<div class="col-12 col-lg-5 col-xl-3 p-2">

				<div className='left-chats'>
				<div className="px-2 ">
                  <div className="d-flex align-items-center " >
                    <div className="flex-grow-1 position-relative " >
                      <input type="text" className="form-control my-1 border-0 py-2" placeholder="Search agent" style={{backgroundColor:'#FAFAFA'}}/>
                      <div className="position-absolute top-50 end-0 translate-middle-y">
                        <i className="fas fa-search text-muted mx-3 "></i> {/* Assuming you're using Font Awesome for icons */}
                      </div>
                    </div>
                  </div>
                </div>

				{[...Array(15)].map((index) => (<a href="#" class="list-group-item list-group-item-action border-0 p-2">
						
						<div class="d-flex align-items-start border-bottom pb-2">
						<img src="./img/inbox/Ellipse 2371.png" class="rounded-circle mr-1" alt="Chris Wood" width="44" height="44"/>
							<div className='mx-2 w-100'>
							<div className="d-flex justify-content-between "  style={{fontSize:'14px'}}>
							<div class=" ml-3">
								<span><b>Jonatha William</b></span>
								
							</div>
							<div><span className='text-muted'>12:00 AM</span></div>
							</div>
							<div style={{fontSize:'14px'}} className='text-muted'><span>{truncateText('Analysis of foreign Experiencscscsscscefdbdfbfdbdfscs', 31)}</span></div>
							</div>
							
						</div>
					</a>))}
				</div>
					
					{/* <a href="#" class="list-group-item list-group-item-action border-0">
						<div class="badge bg-success float-right">2</div>
						<div class="d-flex align-items-start">
							<img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle mr-1" alt="William Harris" width="40" height="40"/>
							<div class="flex-grow-1 ml-3">
								William Harris
								<div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
							</div>
						</div>
					</a> */}
					
				</div>
				<div class="col-12 col-lg-7 col-xl-9 p-2">
					<div>
					<div class="py-2 px-2 border-bottom">
						<div class="d-flex align-items-center py-1">
							<div class="position-relative">
								<img src="./img/inbox/Ellipse 2371.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="44" height="44"/>
							</div>
							<div class="flex-grow-1 pl-3 mx-3">
								<strong>Jonathan William</strong>
								<div class="text-muted small">Active Now <span class="fas fa-circle chat-online fa-xs mx-2" ></span></div>
							</div>
							<div>
                            <i class="fa-solid fa-lg fa-ellipsis-vertical"></i>
							</div>
						</div>
					</div>

					<div class="position-relative">
						<div class="chat-messages p-4">

							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vixsset te vixsset te vixsset te vixsset te vixsset te vixsset te vix.
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>

							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>

							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit amet, vis erat denique in, dicunt prode
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>
							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Siidit meliore docendi ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>
							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit amet, vis 
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>
							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Siti ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>
							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset tedicunt prodesset tedicunt prodesset tedicunt prodesset te vixsset te vixsset te vixsset te vixsset te vixsset te vixsset te vix.
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>
							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Sit meis deleniti eu, prdicunt prodesset tedicunt prodesset tei vidit meliore docendi ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>
							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit amet, vrodesset te vixsset te vixsset te vixsset te vixsset te vixsset te vixsset te vix.
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>
							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Sit meis deleniti eu, pdicunt prodesset tedicunt prodesset tedicunt prodesset teri vidit meliore docendi ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>
							<div class="chat-message-right pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2373.png" class="rounded-circle mr-1" alt="Chris Wood" width="48" height="48"/>
								</div>
								<div >
								<div className="flex-shrink-1 bg-dark py-4 px-3 mx-3" style={{ borderRadius: '16px 4px 16px 16px', color:'white' }}>
  Lorem ipsum dolor sit aodesset te vixsset te vixsset te vixsset te vixsset te vixsset te vixsset te vix.
</div><div class="text-muted small text-nowrap mx-3 mt-1">2:33 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>

							</div>	
							<div class="chat-message-left pb-4">
								<div>
									<img src="./img/inbox/Ellipse 2374.png" class="rounded-circle mr-1" alt="Sharon Lessman" width="48" height="48"/>
								</div>
								<div>
								<div class="flex-shrink-1 bg-light py-4 px-3 mx-3" style={{ borderRadius: '4px 16px 16px 16px' }}>
									Sit meis  vidit meliore docendi ut, an eum erat animal commodo.
								</div>
								<div class="text-muted text-end small text-nowrap mt-1 mx-3">2:34 am <img src="./img/inbox/Group (2).png" alt="" /></div>
								</div>
							</div>						

							

							

							
							

							

							

						</div>
					</div>

					<div className="flex-grow-0 py-3 px-4 border-top" >
    <div className="d-flex justify-content-center">
	<div>
            <img src="./img/inbox/Group 1686553947.png" onClick={togglePicker} alt="" />
        </div>
        <div className="input-group">
            <input
                type="text"
                className="form-control border-0"
                placeholder="Type your message"
                value={message}
                onChange={handleInputChange}
                onClick={handlepicker}
            />
            {/* <button className="btn btn-primary" onClick={handleSend}>Send</button> */}
			
        </div>
        <div>
            <input
                type="file"
                accept="*/*" 
                style={{ display: 'none' }}
                id="fileInput"
                onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className='mt-2'>
                <img src="./img/inbox/Frame (1).png" alt="Upload File" style={{ cursor: 'pointer' }} />
            </label>
           
        </div>
		<div>
            <input
                type="file"
                accept="image/*,video/*" 
                style={{ display: 'none' }}
                id="imageInput"
                onChange={handleImageChange}
            />
            <label htmlFor="imageInput" className='mt-2 mx-2'>
                <img src="./img/inbox/Camera.png" alt="Upload Image" style={{ cursor: 'pointer' }} />
            </label>
           
        </div>
		{showSend? <div className='mt-2'>
            <img src="./img/inbox/send.png" alt="" width='25px' height='25px'/>
        </div>:<div>
            <img src="./img/inbox/Group 1686553948.png" alt="" />
        </div>}
    </div>
    <div className="">
	{showPicker && (
        <div className="emoji-picker-wrapper">
		<Picker
			onEmojiSelect={handleEmojiClick}
			autoFocus={true}
			emojiSize={24}
			emojiButtonSize={36}
			emojiButtonRadius={'100%'}
			emojiButtonColors={['#f00', 'pink', 'rgba(155,223,88,.7)']}
			emojiVersion={14}
			icons={'auto'}
			locale={'en'}
			maxFrequentRows={4}
			navPosition={'top'}
			perLine={perLine}
			previewEmoji={'point_up'}
			previewPosition={'none'}
			searchPosition={'sticky'}
			set={'native'}
			skin={1}
			theme={'auto'}
			
		/>
	</div>
    )}
	</div>
</div>


					</div>

				</div>
			</div>
		</div>
	</div>
</main>
        </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </>
  )
}

export default InstructorInbox