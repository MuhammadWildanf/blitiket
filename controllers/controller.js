class Controller {

    static home(req,res){
        res.send('home')
    }


    /** event controller */

    static addEvent(req,res){
        res.send('addevent')
    }

    static postAddEvent(req,res){
        res.send('postevent')
    }

    static readEventById(req,res){
        res.send('eventbyid')
    }

    static buyTicketForm(req,res){
        res.send('ticketForm')
    }

    static postBuyTicket(req,res){
        res.send('home')
    }

    static confimationPage(req,res){
        res.send('home')
    }

    
    /**User Controller */

    static readUserTicket(req,res){
        res.send('userticket')
    }

    static readEventList(req,res){
        res.send('readEventList')
    }

    static editEvent(req,res){
        res.send('editEvent')
    }

    static postEditEvent(req,res){
        res.send('postEditEvent')
    }    

    static deleteEvent(req, res){
        res.send('deleteevent')
    }

}

module.exports = Controller