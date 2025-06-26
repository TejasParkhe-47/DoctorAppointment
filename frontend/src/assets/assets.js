import appointment_img from './image4.png'
import header_img from './image3.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo2.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './image1.png'
import doc2 from './image2.png'

import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anil Sharma',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sharma is dedicated to providing holistic medical care with a focus on preventive health and timely diagnosis.',
        fees: 50,
        address: {
            line1: 'Flat No. 302, Shree Apartment',
            line2: 'Aundh, Pune'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Deshmukh',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Deshmukh specializes in women’s health, offering compassionate care and expert advice.',
        fees: 60,
        address: {
            line1: 'Plot No. 12, Sunflower Society',
            line2: 'Baner Road, Pune'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sameer Kulkarni',
        image: doc1,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Kulkarni focuses on skin health, offering solutions for a variety of dermatological concerns.',
        fees: 30,
        address: {
            line1: 'Ganga Residency, B-Block',
            line2: 'Kothrud, Pune'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Meena Joshi',
        image: doc2,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Joshi provides expert care for children, ensuring their physical and emotional well-being.',
        fees: 40,
        address: {
            line1: 'Sukh Sagar Apartments',
            line2: 'Camp, Pune'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rajesh Iyer',
        image: doc1,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Iyer specializes in diagnosing and treating neurological conditions with precision and care.',
        fees: 50,
        address: {
            line1: 'Blue Ridge Tower',
            line2: 'Hinjewadi, Pune'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Kavita Nair',
        image: doc2,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nair is known for her dedication to treating complex neurological disorders.',
        fees: 50,
        address: {
            line1: 'Elegance Society, 6th Floor',
            line2: 'Viman Nagar, Pune'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Akshay Gupta',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gupta focuses on holistic patient care, emphasizing preventive strategies.',
        fees: 50,
        address: {
            line1: 'Greenwoods Residency',
            line2: 'Wakad, Pune'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Swati Patil',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Patil is dedicated to women’s health and wellness, offering comprehensive care.',
        fees: 60,
        address: {
            line1: 'Mantri Splendor Apartments',
            line2: 'Hadapsar, Pune'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Pooja Reddy',
        image: doc2,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Reddy helps patients achieve healthy and radiant skin through personalized treatments.',
        fees: 30,
        address: {
            line1: 'White Blossom Complex',
            line2: 'Koregaon Park, Pune'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Vikram Bhat',
        image: doc1,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Bhat provides exceptional pediatric care, ensuring the health of children of all ages.',
        fees: 40,
        address: {
            line1: 'Sunny Skies Apartments',
            line2: 'Sinhagad Road, Pune'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Arjun Rao',
        image: doc1,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS-Orthopedics',
        experience: '6 Years',
        about: 'Dr. Rao specializes in bone and joint care, offering surgical and non-surgical solutions for orthopedic conditions.',
        fees: 70,
        address: {
            line1: 'Ruby Heights',
            line2: 'Bhosale Nagar, Pune'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Neha Chavan',
        image: doc2,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD-Cardiology',
        experience: '8 Years',
        about: 'Dr. Chavan is an expert in heart health, focusing on the diagnosis and treatment of cardiovascular diseases.',
        fees: 90,
        address: {
            line1: 'Heart Care Clinic',
            line2: 'Deccan Gymkhana, Pune'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Tanmay Dixit',
        image: doc1,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MS-ENT',
        experience: '5 Years',
        about: 'Dr. Dixit provides comprehensive care for ear, nose, and throat conditions, helping patients regain their well-being.',
        fees: 50,
        address: {
            line1: 'Wellness Centre, Tower C',
            line2: 'Kalyani Nagar, Pune'
        }
    },
    
]