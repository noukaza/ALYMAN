<template>
    
  <!--<b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
    class="mb-5">-->
    <b-card class="mb-5">
      <h4> Ma photo a prague </h4>
    <b-img style = "width : 100%" v-bind="mainProps" src="https://picsum.photos/600/300/?image=25" ></b-img>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <Comment images="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/70847106_134544727886275_2476429933133740922_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=WWfOM1igvZgAX-5XZ63&oh=d2ea423f14e25485db81e565bfd63394&oe=5EB3FAEF" username="Media heading" descriptions="    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
">
    </Comment>
    <Comment images="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/66170357_131565361386054_8135011217058066402_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=Cw8T8FN70o8AX-vu0Sp&oh=40cea8d6a9c282ce45d1b99d74afe888&oe=5E99A97E" username="Media heading" descriptions="    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
 ">
    </Comment>
    <Comment images="https://picsum.photos/600/300/?image=25" username="Media heading" descriptions="    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
 ">
    </Comment>
    <CommentSaisie></CommentSaisie>
  </b-card>
  
</template>
<script>
import Comment from '~/components/publication/Comment';
import CommentSaisie from '~/components/publication/CommentSaisie';
  export default {
    components:{
        Comment,
        CommentSaisie
    }
  }
</script>