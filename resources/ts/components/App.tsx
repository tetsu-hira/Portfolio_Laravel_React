import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

import allActions from '../actions';
import Header from './Header';
import About from './About';
import User from './User';
import Top from './Top';
import UserDetail from './UserDetail';
import Item from './Item';

import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const store = createStore(rootReducer);

const App: FC = () => {
  const [item, setItem] = useState<string>('');

  const [stateProp, setStateProp] = useState<string>(window.location.pathname);

  const updateState = (paths: string) => {
    setStateProp(paths);
  };

  const entryItem = useSelector((state: RootState) => state.entryItem);
  const dispatch = useDispatch();
  const itemName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (item) {
      if (item.length < 33) {
        setItem(event.target.value);
        console.log(item);
      }
    }
  };

  const defaultItem = () => {
    setItem(item.slice(1));
    console.log(item);
  };

  const nullItem = () => {
    setItem(' ');
    console.log(item);
  };

  return (
    <BrowserRouter>
      <>
        <Header updateState={updateState} stateProp={stateProp} />
        <div className='App'>
          <div className='Top'>
            <div className='TopContainer'>
              <div className='TopContainer__Left'>
                {/* Reduxを使ったテスト */}
                <div className='TopHead'>
                  <div className='TopButton'>
                    <input
                      className='TopButton__name'
                      type='text'
                      id='name'
                      onChange={itemName}
                      value={!item ? '作成したい大会・部門名を入力' : item}
                      onBlur={defaultItem}
                      onClick={nullItem}
                    ></input>
                    <button
                      onClick={() => dispatch(allActions.entryAction.addItem(item))}
                      className='TopButton__button'
                    >
                      Create
                    </button>
                  </div>
                  <div className='TopHead__title'>＜Category-List＞</div>
                </div>
                <ul className='TopList'>
                  {entryItem.itemList.map((item: string, index: number) => (
                    <React.Fragment key={index}>
                      <li key={item} className='TopList__item'>
                        <div className='TopList__itemName'>
                          <Link
                            to={`./${item}`}
                            className='TopList__itemName'
                            onClick={() => {
                              updateState('');
                            }}
                          >
                            <p>{item}</p>
                          </Link>
                        </div>
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <div className='TopContainer__Right'>
                <Routes>
                  <Route path='/' element={<Top />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/user' element={<User />} />
                  <Route path='/user/:id' element={<UserDetail />} />
                  <Route path='/:item' element={<Item />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
};

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('app'),
  );
}
