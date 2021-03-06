import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'

import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import AppBar from '../components/AppBar.jsx'

const Formularies = () => {
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null)
  const forms = useSelector( state => state.forms )

  // TO-DO: no quiere actualizar

  const toggleMenu = (e) => {
    if (!anchorEl) 
      setAnchorEl(e.currentTarget)
    else
      setAnchorEl(null)
  }

  const deleteFormulary = () => {
    console.log('Deleting a formulary...')
  }

  const addFormulary = () => {
    console.log('Adding a formulary...')
    navigate(`/formularies/create`)
  }

  const openFormulary = (id) => {
    console.log(`opening formulary ${id}...`)
    navigate(`/formularies/${id}`)
  }

  const editFormulary = (id) => {
    console.log(`editing formulary ${id}...`)
    navigate(`/formularies/edit/${id}`)
  }

  const fabStackStyle = {
    right: 16,
    bottom: 16,
    position: 'fixed'
  }

  return (
      <>
        <AppBar title="Formularios"/>
        <Container sx={{mt:2}}> 
          
          <List dense>
            {forms.map( form => 
              <ListItem 
                disablePadding
                key={form.id}
                secondaryAction={
                  <IconButton 
                    edge="end"
                     onClick={() => editFormulary(form.id)}
                  >
                    <EditIcon/>
                  </IconButton>
                }
              >
                <ListItemButton
                  onClick={ () => openFormulary(form.id) }>
                  <ListItemText 
                    primary={form.title} 
                    secondary="Creador por: name"/>
                </ListItemButton>
              </ListItem>
            )}
          </List>

          <Stack
            sx={fabStackStyle}
            spacing={2}
            alignItems="center"
          >
            <Fab 
              color="primary" 
              aria-label="add"
              onClick={addFormulary}
            >
              <AddIcon />
            </Fab>
          </Stack>
        </Container>
      </>
    )
}

export default Formularies