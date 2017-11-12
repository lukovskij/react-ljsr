import React, { Component } from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'

import {articles} from './fixtures'

render(<ArticleList articles={ articles }/>, document.getElementById('container'));