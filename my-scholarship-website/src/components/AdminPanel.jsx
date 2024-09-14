import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AdminPanel.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AdminPanel = () => {
  const [scholarships, setScholarships] = useState([]);
  const [newScholarship, setNewScholarship] = useState({
    title: '',
    description: '',
    banner: '',
    links: [],
    rewardWorth: '',
    deadline: null,
    gradeLevel: '',
    country: ''
  });
  const [linkInput, setLinkInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [expanded, setExpanded] = useState({});

  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    banner: '',
    video: '',
    links: []
  });

  const [blogLinkInput, setBlogLinkInput] = useState('');
  const [isEditingBlog, setIsEditingBlog] = useState(false);
  const [editBlogIndex, setEditBlogIndex] = useState(null);

  useEffect(() => {
    fetchScholarships();
    fetchBlogs();
  }, []);

  const fetchScholarships = async () => {
    try {
      const response = await axios.post('http://localhost:4001/scholarships/fetchAllScholarShips');
      // console.log('Fetched Scholarships:', response.data);
      setScholarships(response.data);
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.post('http://localhost:4001/blogs/fetchBlogs');
      // console.log('Fetched Blogs:', response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };


  const handleInputChange = (e, setState, state) => {
    const { name, value } = e.target;
    // console.log(e.target.name +" - "+ e.target.value);
    setState({ ...state, [name]: value });
  };

  const handleBannerChange = (e, setState, state) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setState({ ...state, banner: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleVideoChange = (e, setState, state) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setState({ ...state, video: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddLink = (setState, state, linkInput, setLinkInput) => {
    setState({ ...state, links: [...state.links, linkInput] });
    setLinkInput('');
  };

  const handleAddScholarship = async () => {
    // console.log('Adding Scholarship:', newScholarship);

    try {
      const response = await axios.post('http://localhost:4001/scholarships/addScholarships', newScholarship);
      // console.log('Add Scholarship Response:', response.data);
      setScholarships(scholarships);
      fetchScholarships();
    } catch (error) {
      console.error('Error adding scholarship:', error);
    }

    setNewScholarship({
      title: '',
      description: '',
      banner: '',
      links: [],
      rewardWorth: '',
      deadline: null,
      gradeLevel: '',
      country: ''
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const finalEditScholarship = async (id) => {
    // console.log(editIndex); 
    // console.log('Editing Scholarship:', newScholarship);
    const res = await axios.post('http://localhost:4001/scholarships/updateScholarShips?id=' + editIndex, newScholarship);
    // console.log('Edited Scholarship Response:', res.data);
    setIsEditing(false);
    setEditIndex(null);
    setNewScholarship({
      title: '',
      description: '',
      banner: '',
      links: [],
      rewardWorth: '',
      deadline: null,
      gradeLevel: '',
      country: ''
    });
    fetchScholarships();
  };


  const handleEditScholarship =async (index) => {
    setNewScholarship(scholarships.find((_, i) => _._id === index));
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleRemoveScholarship = async (index) => {
    const scholarshipId = index; // Assuming each scholarship has an id field
    // console.log('Removing Scholarship ID:', scholarshipId);

    try {
      const response = await axios.post('http://localhost:4001/scholarships/deleteScholarships', { id: scholarshipId });
      // console.log('Remove Scholarship Response:', response.data);
      const updatedScholarships = scholarships.filter((_, i) => i !== index);
      setScholarships(updatedScholarships);
      fetchScholarships();
    } catch (error) {
      console.error('Error removing scholarship:', error);
    }
  };

  const handleAddBlog = async () => {
    // console.log('Adding Blog:', newBlog);
    const updatedBlogs = isEditingBlog
      ? blogs.map((blog, index) =>
          index === editBlogIndex ? newBlog : blog
        )
      : [...blogs, newBlog];

    try {
      const response = await axios.post('http://localhost:4001/blogs/addBlogs', newBlog);
      // console.log('Add Blog Response:', response.data);
      setBlogs(blogs);
      fetchBlogs();
    } catch (error) {
      console.error('Error adding blog:', error);
    }

    setNewBlog({
      title: '',
      description: '',
      banner: '',
      video: '',
      links: []
    });
    setIsEditingBlog(false);
    setEditBlogIndex(null);
  };

  const finalEditBlog = async () => {
    // console.log('Editing Blog:', newBlog);
    const res = await axios.post('http://localhost:4001/blogs/updateBlogs?id=' + editBlogIndex, newBlog);
    // console.log('Edited Blog Response:', res.data);
    setIsEditingBlog(false);
    setEditBlogIndex(null);
    setNewBlog({
      title: '',
      description: '',
      banner: '',
      video: '',
      links: []
    });
    fetchBlogs();
  }

  const handleEditBlog = (index) => {
    setNewBlog(blogs.find((_, i) => _._id === index));
    setIsEditingBlog(true);
    setEditBlogIndex(index);
  };

  const handleRemoveBlog = async (index) => {
    const blogId = index; 
    // console.log('Removing Blog ID:', blogId);

    try {
      const response = await axios.post('http://localhost:4001/blogs/deleteBlogs', { id: blogId });
      // console.log('Removed Blog Response:', response.data);
      const updatedBlogs = blogs.filter((_, i) => i !== index);
      setBlogs(updatedBlogs);
      fetchBlogs();
    } catch (error) {
      console.error('Error removing blog:', error);
    }
  };

  const [searchScholarship, useSearchScholarship] = useState('');
  const [searchBlog, useSearchBlog] = useState('');

  const handleSearchScholarship = async (e) => {
    useSearchScholarship(e.target.value);
    const res = await axios.post('http://localhost:4001/scholarships/searchScholarShips', {filter : searchScholarship});
    setScholarships(res.data.list);
  }

  const handleSearchBlog = async (e) => {
    useSearchBlog(e.target.value);
    const res = await axios.post('http://localhost:4001/blogs/searchBlogs', {filter : searchBlog});
    setBlogs(res.data);
  }

  const toggleExpand = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South',
    'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
    'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
    'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <div className="admin-panel">
      <Navbar />
      <div className="container">
        <div id="scholarship-section" className="form-section">
          <h2>{isEditing ? 'Edit Scholarship' : 'Add Scholarship'}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newScholarship.title}
            onChange={(e) => handleInputChange(e, setNewScholarship, newScholarship)}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newScholarship.description}
            onChange={(e) => handleInputChange(e, setNewScholarship, newScholarship)}
          />
          <input
            type="file"
            name="banner"
            onChange={(e) => handleBannerChange(e, setNewScholarship, newScholarship)}
          />
          <div className="link-input">
            <input
              type="text"
              placeholder="Add Link"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
            />
            <button onClick={() => handleAddLink(setNewScholarship, newScholarship, linkInput, setLinkInput)}>Add Link</button>
          </div>
          <input
            type="text"
            name="rewardWorth"
            placeholder="Reward Worth"
            value={newScholarship.rewardWorth}
            onChange={(e) => handleInputChange(e, setNewScholarship, newScholarship)}
          />
          <DatePicker
            selected={newScholarship.deadline}
            onChange={(date) => setNewScholarship({ ...newScholarship, deadline: date })}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Deadline"
          />
          <input
            type="text"
            name="gradeLevel"
            placeholder="Grade Level"
            value={newScholarship.gradeLevel}
            onChange={(e) => handleInputChange(e, setNewScholarship, newScholarship)}
          />
          <select
            name="country"
            value={newScholarship.country}
            onChange={(e) => handleInputChange(e, setNewScholarship, newScholarship)}
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <button onClick={(isEditing) ? (finalEditScholarship) : (handleAddScholarship)}>{isEditing ? 'Update Scholarship' : 'Add Scholarship'}</button>
        </div>

        <div className="list-section">
          <h2>Scholarships List <input placeholder='Search Scholarships' onChange={handleSearchScholarship} value={searchScholarship}></input></h2>
          {scholarships.map((scholarship, index) => (
            <div key={scholarship._id} className="item">
              <h3>{scholarship.title}</h3>
              <p>{scholarship.description}</p>
              <p>Reward Worth: {scholarship.rewardWorth}</p>
              <p>Grade Level: {scholarship.gradeLevel}</p>
              <p>Deadline: {scholarship.deadline ? new Date(scholarship.deadline).toLocaleDateString() : 'Not specified'}</p>
              <p>Country: {scholarship.country}</p>
              <div className="banner-preview">
                {scholarship.banner && (
                  <img src={scholarship.banner} alt="Banner Preview" />
                )}
              </div>
              <ul>
                {scholarship.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleEditScholarship(scholarship._id)}>Edit</button>
              <button onClick={() => handleRemoveScholarship(scholarship._id)}>Remove</button>
            </div>
          ))}
        </div>

        <div id="blog-section" className="form-section">
          <h2>{isEditingBlog ? 'Edit Blog' : 'Add Blog'}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => handleInputChange(e, setNewBlog, newBlog)}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newBlog.description}
            onChange={(e) => handleInputChange(e, setNewBlog, newBlog)}
          />
          <input
            type="file"
            name="banner"
            onChange={(e) => handleBannerChange(e, setNewBlog, newBlog)}
          />
          <input
            type="file"
            name="video"
            onChange={(e) => handleVideoChange(e, setNewBlog, newBlog)}
          />
          <div className="link-input">
            <input
              type="text"
              placeholder="Add Link"
              value={blogLinkInput}
              onChange={(e) => setBlogLinkInput(e.target.value)}
            />
            <button onClick={() => handleAddLink(setNewBlog, newBlog, blogLinkInput, setBlogLinkInput)}>Add Link</button>
          </div>
          <button onClick={(isEditingBlog) ? (finalEditBlog) :(handleAddBlog)}>{isEditingBlog ? 'Update Blog' : 'Add Blog'}</button>
        </div>

        <div className="list-section">
          <h2>Blogs List  <input placeholder='Search Blogs' onChange={handleSearchBlog} value={searchBlog}></input></h2>
          {blogs.map((blog, index) => (
            <div key={blog._id} className="item">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="banner-preview">
                {blog.banner && (
                  <img src={blog.banner} alt="Banner Preview" />
                )}
              </div>
              {blog.video && (
                <video controls>
                  <source src={blog.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <ul>
                {blog.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleEditBlog(blog._id)}>Edit</button>
              <button onClick={() => handleRemoveBlog(blog._id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
