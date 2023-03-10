import {Helmet} from 'react-helmet'

const Meta = ( { title, description, keywords } ) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='keyword' content={keywords}/>
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  keyword: 'electronics, buy electronics, cheap electronics',
  description: 'We sell the best product for cheap'

}

export default Meta