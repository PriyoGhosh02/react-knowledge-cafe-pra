
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const BookMarks = ({ bookmarks, readingTime }) => {
    return (

        <div className="w-1/3  ml-4 mt-2 p-4">
            <div className='bg-slate-300 mb-4 p-4 rounded-xl'>
                <h3 className='text-4xl text-center'>Reading Time: {readingTime}min</h3>
            </div>
            <div className='bg-gray-300 rounded-xl py-4'>
                <h2 className="text-3xl text-center">Bookmarked Blogs:{bookmarks.length} </h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>

        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;