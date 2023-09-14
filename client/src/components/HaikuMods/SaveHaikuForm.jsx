import { useState } from 'react';

const SaveHaikuForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    haikuText: '',
    createdAt: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);

    setFormData({
      haikuText: '',
      createdAt: '',
      image: '',
    });
  };

  return (
    <div className="save-haiku-form">
      <h2>Save Your Haiku</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="haikuText">Haiku Text</label>
          <textarea
            type="text"
            id="haikuText"
            name="haikuText"
            value={formData.haikuText}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Creation Date</label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SaveHaikuForm;
