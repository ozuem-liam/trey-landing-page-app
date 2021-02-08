import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import CopyHeader from './CopyHeader';
import CopyVideo from './CopyVideo';
import CopyForm from './CopyForm';
import CopyButton from './CopyButton';


const Copy = ({ onAdd, showAdd}) => {
    const [showAddForm, setShowAddForm] = useState(false)

    return (
        <div>
           <CopyHeader />
           <CopyVideo />
           <CopyButton onAdd={() => setShowAddForm(!showAddForm)}/>
           {showAddForm && <CopyForm />}
        </div>
    )
}

export default Copy
