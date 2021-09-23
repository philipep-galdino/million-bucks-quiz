import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { red } from '@material-ui/core/colors'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      maxHeight: 600,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    tipText: {
      marginLeft: '400px'
    }
  }),
)

export default function QuizContainer() {
  const classes = useStyles()

  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        title="De acordo com o conceito de cidadania, qual opção encontra-se incorreta?"
      />
      <CardContent>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Refere-se a ser membro de um Estado" />
        </ListItem>

        <Divider />

        <ListItem button divider>
          <ListItemText primary="Refere-se a uma instituição político-jurídica de inclusão na sociedade" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Condição de pessoa que não se acha no gozo de deveres, apenas de direitos" />
        </ListItem>

        <Divider light />

        <ListItem button>
          <ListItemText primary="É a prática dos direitos e deveres de um indivíduo em um Estado" />
        </ListItem>
        </List>
      </CardContent>
    </Card>
    </>
  )
}