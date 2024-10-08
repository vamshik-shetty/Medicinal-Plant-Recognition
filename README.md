# Machine Learning-Based Medicinal Plant Recognition

## Overview

This project aims to develop a **machine learning-based web application** that can accurately identify medicinal plants using images of their leaves. The system leverages **Convolutional Neural Networks (CNNs)** to classify plant species and provides comprehensive information about each plant, including scientific names, local names, medicinal uses, and other important details. The application is designed to assist herbalists, researchers, and plant enthusiasts by offering an accessible, reliable tool for plant identification.

## Key Features

- **Accurate Plant Identification:** Uses a CNN model for precise classification of plant species.
- **User-Friendly Interface:** Easy drag-and-drop image upload for plant identification.
- **Detailed Plant Information:** Provides scientific name, local name, and medicinal properties of identified plants.
- **Educational Resource:** Enhances user knowledge about medicinal plants and their sustainable use.

## Purpose

The primary objective of this project is to facilitate **accurate identification** of medicinal plants through machine learning, promoting awareness, conservation, and sustainable use of plant biodiversity. The system minimizes the risks of **misidentification and adulteration**, which can arise from variability in plant species and seasonal changes.

## Scope

This project includes the following key components:
- Data collection and preprocessing of medicinal plant leaf images.
- CNN model development and training to accurately classify the plant species.
- Building a web application that allows users to upload images and receive plant identification results in real-time.

## How It Works

1. Users can upload images of plant leaves via the web interface.
2. The CNN model processes the image and identifies the plant species.
3. The application then provides detailed information about the plant, including its scientific name, local name, and medicinal uses.
4. The results are displayed in a clear, user-friendly format.

## Results

Upon uploading an image, the system processes it through the trained CNN model and returns the following details:
- **Scientific Name**: The scientific name of the plant.
- **Local Name**: The plant's commonly known name in various regions.
- **Medicinal Features**: A list of medicinal uses or properties associated with the plant.

A sample result with the plant's details and image will appear as follows:


| ![Home Output](assets/home.png) | !![Dragdrop Output](assets/dragdrop.png) |
|:------------------------------------------------:|:------------------------------------------------:|


| ![Sample Output 1](assets/output1.png) | ![Sample Output 2](assets/output2.png) |
|:------------------------------------------------:|:------------------------------------------------:|


This result demonstrates the application’s ability to accurately identify the plant species and provide relevant medicinal information based on the uploaded image.

## Future Enhancements

- **Mobile Application Development**: Creating a mobile-friendly version of the web app.
- **Dataset Expansion**: Incorporating more plant species to increase identification accuracy.
- **Real-Time Feedback**: Adding features for user feedback and community engagement.
- **Multilingual Support**: Providing support for multiple languages to make the tool accessible globally.
