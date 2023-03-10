package com.fivenonjangi.noning.controller;

import com.fivenonjangi.noning.config.security.JwtTokenProvider;
import com.fivenonjangi.noning.data.dto.comment.CommentRequestDTO;
import com.fivenonjangi.noning.data.dto.comment.CommentResponseDTO;
import com.fivenonjangi.noning.service.comment.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/boards/{boardid}/comments")
public class CommentController {
    private final CommentService commentService;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public CommentController(CommentService commentService, JwtTokenProvider jwtTokenProvider) {
        this.commentService = commentService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/write")
    public ResponseEntity writeComment(HttpServletRequest request, @PathVariable("boardid") long boardId, @RequestBody CommentRequestDTO commentRequestDTO){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        commentService.writeComment(boardId, commentRequestDTO, userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{commentid}/delete")
    public ResponseEntity deleteComment(HttpServletRequest request, @PathVariable("boardid") long boardId, @PathVariable("commentid") long commentId){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        try {
            commentService.deleteComment(userId, commentId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/list")
    public ResponseEntity getCommentList(HttpServletRequest request, @PathVariable("boardid") long boardId){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        List<CommentResponseDTO> commentResponseDTOList = commentService.getCommentList(boardId, userId);

        return new ResponseEntity<>(commentResponseDTOList, HttpStatus.OK);
    }

    @GetMapping("/{commentid}/list")
    public ResponseEntity getNestedCommentList(HttpServletRequest request, @PathVariable("boardid") long boardId, @PathVariable("commentid") long commentId){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        List<CommentResponseDTO> commentResponseDTOList = commentService.getNestedCommentList(commentId, userId);

        return new ResponseEntity<>(commentResponseDTOList, HttpStatus.OK);
    }

    @PutMapping("/{commentid}/like")
    public ResponseEntity likeComment(HttpServletRequest request, @PathVariable("boardid") long boardId, @PathVariable("commentid") long commentId){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        try{
            commentService.likeComment(commentId, userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{commentid}/dislike")
    public ResponseEntity dislikeComment(HttpServletRequest request, @PathVariable("boardid") long boardId, @PathVariable("commentid") long commentId){
        long userId = Long.parseLong(jwtTokenProvider.getUserPk(request.getHeader("ACCESSTOKEN")));
        try{
            commentService.dislikeComment(commentId, userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
