# Machine Learning with Python

A comprehensive course on machine learning using Python, featuring interactive presentations, hands-on notebooks, and real-world datasets.

## 📚 Course Overview

This course provides a complete introduction to machine learning using Python. Students will learn fundamental concepts, algorithms, and practical applications through a combination of theory and hands-on practice. Topics covered include:

- **Python Fundamentals**: Core Python programming concepts and best practices
- **Data Manipulation**: NumPy and Pandas for efficient data handling
- **Data Visualization**: Creating insightful visualizations with Matplotlib and Seaborn
- **Machine Learning Basics**: Understanding ML concepts, types, and workflows
- **Supervised Learning**: Regression and classification algorithms
- **Unsupervised Learning**: Clustering, dimensionality reduction, and pattern discovery
- **Model Evaluation**: Metrics, validation techniques, and performance optimization
- **Real-world Projects**: Applying ML to solve practical problems

## 🗂️ Repository Structure

```
machine-learning-with-python/
├── presentations/     # Interactive web-based presentation viewer
├── data/             # Datasets for exercises and projects
├── notebooks/        # Jupyter notebooks with lectures and exercises
```

### Presentations

The `presentations/` directory contains a React-based web application that displays course materials in an interactive format. The viewer supports:

- Markdown-based slides
- Code syntax highlighting
- Interactive navigation
- Responsive design for various screen sizes

### Data

The `data/` directory contains datasets used throughout the course:

- CSV files for data manipulation exercises
- Sample datasets for ML algorithms
- Real-world datasets for projects
- Preprocessed data for specific lessons

### Notebooks

The `notebooks/` directory contains Jupyter notebooks organized by topic:

- Lecture notebooks with explanations and examples
- Exercise notebooks for hands-on practice
- Project notebooks for comprehensive applications
- Solution notebooks for reference

## 🚀 Getting Started

### Prerequisites

Before starting the course, ensure you have the following installed:

- **Python 3.8 or higher**: [Download Python](https://www.python.org/downloads/)
- **Node.js 18 or higher**: [Download Node.js](https://nodejs.org/)
- **Jupyter Notebook**: For running interactive notebooks
- **Git**: For version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd machine-learning-with-python
   ```

2. **Set up Python environment** (recommended):
   ```bash
   # Create a virtual environment
   python -m venv venv
   
   # Activate the virtual environment
   # On macOS/Linux:
   source venv/bin/activate
   # On Windows:
   venv\Scripts\activate
   
   # Install Python dependencies
   pip install -r requirements.txt
   ```

3. **Install Jupyter Notebook** (if not already installed):
   ```bash
   pip install jupyter notebook jupyterlab
   ```

### Running the Presentations

The presentations folder contains a React application built with Vite. Follow these steps to run it:

1. **Navigate to the presentations directory**:
   ```bash
   cd presentations
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Open your browser and navigate to `http://localhost:5173`
   - The presentation viewer will load with the course materials

5. **Build for production** (optional):
   ```bash
   npm run build
   npm run preview
   ```

### Running Jupyter Notebooks

1. **Navigate to the notebooks directory**:
   ```bash
   cd notebooks
   ```

2. **Start Jupyter Notebook**:
   ```bash
   jupyter notebook
   ```
   or use JupyterLab for a more modern interface:
   ```bash
   jupyter lab
   ```

3. **Access the notebooks**:
   - Your browser will automatically open to `http://localhost:8888`
   - Navigate through the notebooks in the file browser
   - Click on any `.ipynb` file to open and run it


## 🤝 Contributing

Contributions to improve the course materials are welcome! Please feel free to:

- Report issues or bugs
- Suggest improvements to existing content
- Add new examples or exercises
- Improve documentation

## 📄 License

This course material is provided for educational purposes.

## 📧 Contact

For questions or support, please contact the course instructor.

## 🔗 Additional Resources

- [Python Official Documentation](https://docs.python.org/)
- [NumPy Documentation](https://numpy.org/doc/)
- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [Scikit-learn Documentation](https://scikit-learn.org/stable/)
- [Jupyter Documentation](https://jupyter.org/documentation)
